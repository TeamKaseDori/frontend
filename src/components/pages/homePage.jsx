import { useNavigate } from "react-router-dom";
import { PageWrapper } from "../organisms/wrapper/pageWrapper";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { useState } from "react";
import { ExplanationFlush } from "../molecules/explanationFlush";


export const HomePage = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [currentButton, setCurrentButton] = useState(null);

    const StartMatching = () => {
        navigate("/matching");
    }

    const handleShow = (button) => {
        setCurrentButton(button);
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);

    const handleConfirm = () => {
        if (currentButton) {
            currentButton.onConfirm();
        }
        handleClose();
    };

    const buttonData = [
        { 
            variant: 'secondary', 
            text: 'シンプルマッチング',
            modalMessage: 'シンプルマッチングを開始しますか？',
            modalMessage2: '位置情報などをもとにランダムでマッチングします。',
            onConfirm: StartMatching
        },
        { 
            variant: 'secondary', 
            text: '異性マッチング',
            modalMessage: '異性マッチングを開始しますか？',
            modalMessage2: '性別や位置情報などをもとにランダムでマッチングします。',
            onConfirm: StartMatching
        },
    ];

    return (
        <PageWrapper>
            <Container className="text-center mt-4 mb-4">
                <div style={{ height: '24px'}}></div>

                <Row className="mb-3">
                    {buttonData.map((button, index) => (
                        <Col key={index} xs={12} md={6} className="d-flex justify-content-center mb-3">
                            <Button 
                                variant={button.variant} 
                                size="lg" 
                                className="w-100"
                                style={{ height: '180px' }}
                                onClick={() => handleShow(button)}
                            >
                                <span className="display-6">
                                    {button.text}
                                </span>
                            </Button>
                        </Col>
                    ))}
                </Row>


                <Modal show={showModal} onHide={handleClose} size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header closeButton>
                        <Modal.Title>確認</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{currentButton && currentButton.modalMessage}</p>
                        <p>{currentButton && currentButton.modalMessage2}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            キャンセル
                        </Button>
                        <Button variant="primary" onClick={handleConfirm}>
                            マッチング開始
                        </Button>
                    </Modal.Footer>
                </Modal>

                <div style={{ height: '48px'}}></div>

                <ExplanationFlush />
            </Container>
        </PageWrapper>
    );
};