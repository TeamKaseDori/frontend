import { useEffect, useState } from "react";
import { useGeolocationTracker } from "../../../hooks/location/useGeolocationTracker";
import { useGeoPythagoreanDistance } from "../../../hooks/calculation/useCalculation";
import {DistanceOnlyCircle} from "../../organisms/leader/circle/distanceOnlyCircle";
import {PageWrapper} from "../../organisms/wrapper/pageWrapper";
import Spinner from 'react-bootstrap/Spinner';
import { Container } from "react-bootstrap";

const TestDataTokyoStation = {
    Latitude:35.6809591,
    Longitude:139.7673068
}

//位置情報取得テスト用
export const LeaderPage = () => {
    const [distance, setDistance] = useState(999999);
    const [preDistance, setPreDistance] = useState(999999);

    const [selfCoords, setSelfCoords] = useState(undefined);

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
        }
        console.log("位置情報を取得しました");
    }, [selfCoords, calculatedDistance]); 

    return (
        <PageWrapper>
            <Container className="text-center">
                    <h2>現在地</h2>
                    {selfCoords ? (
                        <>
                            <p>緯度: {selfCoords.coords.latitude}</p>
                            <p>経度: {selfCoords.coords.longitude}</p>
                            <p>移動方向: {selfCoords.coords.heading ?? '移動してください'}</p>
                        </>
                    ) : (
                        <>
                            <Spinner animation="border" />
                        </>
                    )}

                    <hr />
                    <h2>東京駅の座標</h2>
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

                    <hr />

                    <br />

                {selfCoords ? (
                <DistanceOnlyCircle distance={distance} preDistance={preDistance}/>
                ) : (
                    <Spinner animation="border" />
                )}
            </Container>
        </PageWrapper>
    );
};