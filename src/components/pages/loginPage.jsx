import {PageWrapper} from "../organisms/wrapper/pageWrapper";
import { Container, Alert, Form, Button, Spinner } from 'react-bootstrap';
import { useState } from 'react';
import { useLogin } from "../../hooks/api/useApiAuth";


export const LoginPage = () => {
    const { doLogin, loading, error, setError } = useLogin();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (setter) =>  (event) => {
        const newText = event.target.value;
        setter(newText);
    };

    const onClickLogin = () => {
        alert(`${email}\n${password}`);
        doLogin(email, password);
    };

    return (
        <PageWrapper isHeader={false} is_auth={true}>
            <Container className="text-center">
                {loading ? (
                    <>
                        <div style={{ height: '40vh'}}></div>
                        <Spinner animation="border" />
                    </>
                ) : (
                    <>
                        <h1 className="mt-4 mb-4">ログイン</h1>
                        {error ? (
                        <Alert variant="danger" onClose={() => setError(false)} dismissible>
                            <Alert.Heading>ログインに失敗しました</Alert.Heading>
                            <p>
                                ログインに失敗しました。メールアドレス、パスワードをもう一度確認して入力してください。
                            </p>
                        </Alert>
                        ) : null } 

                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>メールアドレス</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleChange(setEmail)} 
                                    required/>
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword" value={password} onChange={handleChange(setPassword)}>
                                <Form.Label>パスワード</Form.Label>
                                <Form.Control type="password" placeholder="Password" required/>
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <Button variant="dark" type="submit" className="mt-2 mb-4" onClick={onClickLogin} size="lg">
                                ログイン
                            </Button>
                        </Form>

                        <p>アカウントはお持ちですか？
                            <Alert.Link href="/signup">アカウント登録</Alert.Link>
                            する
                        </p>
                    </>
                )}
            </Container>
        </PageWrapper>
    );
};