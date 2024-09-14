import { Link } from "react-router-dom";
import {PageWrapper} from "../organisms/wrapper/pageWrapper";
import { Button, Col, Container, Row } from "react-bootstrap";


export const HomePage = () => {
    
    return (
        <PageWrapper>
            <Container className="text-center mt-4 mb-4">
                ホームページ
                <Link to="/leader">位置情報テスト</Link>

                <Row className="mb-3">
                    {/* ボタン1とボタン2 */}
                    <Col xs={12} md={6} className="d-flex justify-content-center mb-3">
                        <Button variant="primary" size="lg" className="w-100" 
                            style={{ height:'180px' }}
                        >
                            <span  className="display-6">
                                シンプルマッチング
                            </span>
                        </Button>
                    </Col>

                    <Col xs={12} md={6} className="d-flex justify-content-center mb-3">
                        <Button variant="secondary" size="lg" className="w-100"
                            style={{ height:'180px' }}
                        >
                            <span  className="display-6">
                                シンプルマッチング
                            </span>
                        </Button>
                    </Col>
                        

                </Row>
            </Container>
        </PageWrapper>
    );
};