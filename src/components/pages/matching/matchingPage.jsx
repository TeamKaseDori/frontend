import { Container, Row, Col, Spinner } from "react-bootstrap";

export const MatchingPage = () => {
    return (
        <Container
            fluid
            className="d-flex justify-content-center align-items-center vh-100"
        >
            <Row>
                <Col className="text-center">
                    <Spinner animation="border" role="status" className="mb-3">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    <p>マッチング中...</p>
                    <p>目的地に向かいながらお待ちください</p>
                </Col>
            </Row>
        </Container>
    );
};