import { useEffect, useState } from "react";
import { useGeolocationTracker } from "../../../hooks/location/useGeolocationTracker";
import { useGeoPythagoreanDistance } from "../../../hooks/calculation/useCalculation";
import {DistanceOnlyCircle} from "../../organisms/leader/distanceOnlyCircle";
import Spinner from 'react-bootstrap/Spinner';
import { Button, Container, Form, Modal, OverlayTrigger, Tab, Tabs, Tooltip } from "react-bootstrap";
import { PartnerDirection } from "../../../hooks/calculation/useCalculation";
import { ExplanationMatchingFlush } from "../../molecules/explanationFlush";
import { useNavigate } from "react-router-dom";
import { DistanceDirectionCircle } from "../../organisms/leader/distanceDirectionCircle";
import { WebSocketMatching } from "../../../hooks/api/useSocketMatching";

const TestDataTokyoStation = {
    Latitude:35.6809591,
    Longitude:139.7673068
}

//位置情報取得テスト用
export const LeaderPage = () => {
    const navigate = useNavigate();
    const [modalShowHint, setModalShowHint] = useState(false);
    const [modalShowCancel, setModalShowCancel] = useState(false);

    const [distance, setDistance] = useState(999999);
    const [preDistance, setPreDistance] = useState(999999);

    const [targetDirection, setTargetDirection] = useState(0);

    const [selfCoords, setSelfCoords] = useState(undefined);

    const DoMatchingCancel = () => {
        navigate("/");
    }

    useGeolocationTracker(setSelfCoords);

    const calculatedDistance = useGeoPythagoreanDistance(
        selfCoords?.coords.latitude ?? 0,
        selfCoords?.coords.longitude ?? 0,
        TestDataTokyoStation.Latitude,
        TestDataTokyoStation.Longitude
    );

    useEffect(() => {
        if(selfCoords){
            console.log("距離を計算しました");
            const newDistance = calculatedDistance;
            setPreDistance(distance);
            setDistance(newDistance);
            setTargetDirection(PartnerDirection(
                TestDataTokyoStation.Latitude, 
                TestDataTokyoStation.Longitude, 
                selfCoords.coords.latitude, 
                selfCoords.coords.longitude
            ));
        }
        console.log("位置情報を取得しました");
    }, [selfCoords, calculatedDistance]); 

    WebSocketMatching(
            // selfCoords.coords.latitude, 
            // selfCoords.coords.longitude
    );

    return (
        <Container>
            <Tabs
                defaultActiveKey="leader1"
                id="tab"
                className="mb-3 mt-3"
                fill
            >

                <Tab eventKey="leader1" title="Laeder Ⅰ">
                    <div style={{ 
                        textAlign: 'center', width: '100%', height: '80vh', 
                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                    }}>
                        {selfCoords ? (
                            <OverlayTrigger
                                placement="bottom"
                                delay={{ show: 250, hide: 400 }}
                                overlay={<Tooltip>
                                        向かう方向が正しいと大きくなります。
                                        <br />
                                        相手との距離が狭まると青色になります。
                                    </Tooltip>
                                    }
                            >
                                <div>
                                    <DistanceDirectionCircle 
                                        distance={distance} preDistance={preDistance}  
                                        myDirection={selfCoords.coords.heading} targetDirection={targetDirection}
                                    />
                                </div>
                            </OverlayTrigger>
                        ) : (
                            <Spinner animation="border" />
                        )}
                    </div>
                </Tab>

                <Tab eventKey="leader2" title="Laeder Ⅱ">
                    <div style={{ 
                        textAlign: 'center', width: '100%', height: '80vh', 
                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                    }}>
                        {selfCoords ? (
                            <OverlayTrigger
                                placement="bottom"
                                delay={{ show: 250, hide: 400 }}
                                overlay={<Tooltip>
                                        相手との距離を切り上げ５の倍数で表示します。
                                        <br />
                                        相手との距離が狭まると青色になります。
                                    </Tooltip>
                                    }
                            >
                                <div>
                                    <DistanceOnlyCircle distance={distance} preDistance={preDistance}/>
                                </div>
                            </OverlayTrigger>
                        ) : (
                            <Spinner animation="border" />
                        )}
                    </div>
                </Tab>

                <Tab eventKey="help" title="Help">
                    <Container className="text-center">
                        <h2 className="mt-4">Cancel</h2>

                        <Button 
                            onClick={() => setModalShowCancel(true)}
                            className="mt-2 mb-4"
                            variant="danger" size="lg">
                            キャンセルする
                        </Button>


                        <h2 className="mt-4">Hint</h2>

                        <Button 
                            onClick={() => setModalShowHint(true)}
                            className="mt-2 mb-4"
                            variant="secondary" size="lg">
                            ヒントを見る
                        </Button>


                        <h2 className="mt-4">Q&A</h2>

                        <ExplanationMatchingFlush />


                        <Modal show={modalShowHint}  size="lg"
                            aria-labelledby="contained-modal-title-vcenter" 
                            centered
                            onHide={() => setModalShowHint(false)}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    Hint
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h2>現在地</h2>
                                {selfCoords ? (
                                    <>
                                        <p>緯度: {selfCoords.coords.latitude}</p>
                                        <p>経度: {selfCoords.coords.longitude}</p>
                                        <p>移動方向: {selfCoords.coords.heading ?? '移動してください'}</p>
                                        <p>相手の方向 {targetDirection} </p>    
                                    </>
                                ) : (
                                    <>
                                        <Spinner animation="border" />
                                    </>
                                )}

                                <hr />
                                <h2>相手座標</h2>
                                <p>緯度: {TestDataTokyoStation.Latitude}</p>
                                <p>経度: {TestDataTokyoStation.Longitude}</p>


                                <hr />
                                <h2>距離</h2>
                                {selfCoords ? (
                                    <h3>距離: {distance}m</h3>
                                ) : (
                                    <Spinner animation="border" />
                                )}
                                {preDistance ? (
                                    <p>一つ前の計測：{preDistance}m</p>
                                ) : null}
                            </Modal.Body>
                        </Modal>


                        <Modal 
                            show={modalShowCancel} 
                            onHide={setModalShowCancel}
                            aria-labelledby="contained-modal-title-vcenter" 
                            centered
                            size="lg"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Cancelする</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="orm.ControlInputCancel">
                                    <Form.Label>キャンセル理由</Form.Label>
                                    <Form.Control
                                        type="test"
                                        placeholder="キャンセルする理由を教えてください"
                                        autoFocus
                                    />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="danger" onClick={DoMatchingCancel }>
                                キャンセルする
                            </Button>
                            </Modal.Footer>
                        </Modal>


                    </Container>
                </Tab>

            </Tabs>
        </Container>
    );
};
;