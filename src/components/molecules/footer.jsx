import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {

    return (
        <footer className="bg-dark text-white py-3">
            <Container>
                <Row>
                    <Col className="text-center">
                        <p>Made by チームカサ鳥 2024</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <p>【技育CAMP2024】ハッカソン Vol.14</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}