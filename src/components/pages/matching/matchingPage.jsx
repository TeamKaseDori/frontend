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
                <Modal.Header>
                    <Modal.Title>
                        マッチングに成功しました
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancel}>
                        キャンセル
                    </Button>
                    <Button variant="primary" onClick={StartLeading}>
                        待ち合わせ開始
                    </Button>
                </Modal.Footer>
            </Modal>

        </Container>
    );
};