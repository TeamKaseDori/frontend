import { useNavigate } from "react-router-dom";
import { useLogout } from "../../../hooks/api/useApiAuth";
import {PageWrapper} from "../../organisms/wrapper/pageWrapper";
import { getUserFromSessionStorage } from "../../../hooks/sessionStorage/userSessionStorage";
import { Container, Button, Spinner, Alert, Stack, Row, Col } from 'react-bootstrap';

export const LogoutPage = () => {
    const { doLogout, loading, error, setError } = useLogout();
    const navigate = useNavigate();
    const retrievedUser = getUserFromSessionStorage();
    const onClickLogout = () => {
        if (retrievedUser.is_login) {
            doLogout();
        };
    };
    const onClickBack = () => navigate('/');

    return (
        <PageWrapper isHeader={true}>
            <Container className="text-center">
                {loading ? (
                    <>
                        <div style={{ height: '40vh'}}></div>
                        <Spinner animation="border" />
                    </>
                ) : (
                    <>
                        <div style={{ height: '30px'}}></div>
                        <p className="display-6 mt-4 mb-4">ログアウトしますか？</p>

                        {error ? (
                            <Alert variant="danger" onClose={() => setError(false)} dismissible>
                                <Alert.Heading>ログアウトに失敗しました</Alert.Heading>
                                <p>
                                    通信状況をもう一度確認してからお試しください。
                                </p>
                            </Alert>
                        ) : null } 

                        <Row  className="justify-content-center">
                            <Col sm={12} md={6} lg={4} className="mb-2 mt-2">
                                <Stack gap={4} className="mx-auto">
                                    <Button variant="dark"  size="lg" onClick={onClickLogout}>ログアウトする</Button>
                                    <Button variant="outline-dark"  size="lg" onClick={onClickBack}>ホームに戻る</Button>
                                </Stack>
                            </Col>
                        </Row>
                    </>
                )}
            </Container>
        </PageWrapper>
    );
};