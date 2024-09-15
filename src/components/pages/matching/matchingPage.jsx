import { useEffect, useState } from "react";
import { Container, Row, Col, Spinner, Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const MatchingPage = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const StartLeading = () => {
        navigate("/leader");
    }

    const handleShow = () => {
        setShowModal(true);
    };

    const handleCancel  = () => {
        navigate("/");
    }

    useEffect(() => {
        const timer = setTimeout(() => {
        handleShow();
        }, 4000);
    
        return () => clearTimeout(timer); 
    }, []);

    return (
        <Container
            fluid
            className="d-flex justify-content-center align-items-center vh-100"
        >
            <Row>
                <Col className="text-center">
                    <Spinner animation="grow" role="status" className="mb-3">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    <p>マッチング中...</p>
                    <p>目的地に向かいながらお待ちください</p>
                </Col>
            </Row>

            <Modal show={showModal}  size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Body>
                    <div style={{ 
                        width: '100%', height: '20vh', 
                        display: 'flex', justifyContent: 'center', alignItems: 'center', 
                        textAlign: 'center',
                    }}>
                        <p className="display-6">マッチングに成功しました 🎉</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div style={{ 
                            width: '100%', height: 'fit-contet', 
                            display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', 
                        }}>
                        <Button variant="secondary" onClick={handleCancel}>
                            キャンセル
                        </Button>
                        <Button variant="primary" onClick={StartLeading} size="lg">
                            確定する
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>

        </Container>
    );
};