import { Alert, Container, Spinner, Table } from "react-bootstrap";
import {PageWrapper} from "../organisms/wrapper/pageWrapper";
import { useGetUser } from "../../hooks/api/useApiUser";
import { useEffect } from "react";

export const UserPage = () => {
    const { getUser, userData, loading, error, setError } = useGetUser();

    useEffect(() => {
        getUser();
    }, []);

    return (
        <PageWrapper>
            <Container className="mt-4 text-center">
                {error ? (
                    <Alert variant="danger" onClose={() => setError(false)} dismissible>
                        <Alert.Heading>ユーザー情報の取得に失敗しました</Alert.Heading>
                        <p>
                            ログインに失敗しました。通信状況をもう一度確認してからお試しください。
                        </p>
                    </Alert>
                ) : null }

                <Table responsive>
                    <tbody>
                        <tr>
                            <td><b>名前</b></td>
                            <td>
                                {loading ? (
                                    <Spinner animation="border" />
                                    ) : userData ? (
                                        userData.username
                                    ) : (
                                        <>データの取得に失敗しました</>
                                    )
                                }
                            </td>
                        </tr>
                        <tr>
                            <td><b>メールアドレス</b></td>
                            <td>
                                {loading ? (
                                    <Spinner animation="border" />
                                    ) : userData ? (
                                        userData.email
                                    ) : (
                                        <>データの取得に失敗しました</>
                                    )
                                }
                            </td>
                        </tr>
                        <tr>
                            <td><b>生年月日</b></td>
                            <td>
                                {loading ? (
                                    <Spinner animation="border" />
                                    ) : userData ? (
                                        userData.birth
                                    ) : (
                                        <>データの取得に失敗しました</>
                                    )
                                }
                            </td>
                        </tr>
                        <tr>
                            <td><b>性別</b></td>
                            <td>
                                {loading ? (
                                    <Spinner animation="border" />
                                    ) : userData ? (
                                        userData.gendar
                                    ) : (
                                        <>データの取得に失敗しました</>
                                    )
                                }
                            </td>
                        </tr>
                        <tr>
                            <td><b>趣味一覧</b></td>
                            <td>
                                {loading ? (
                                    <Spinner animation="border" />
                                    ) : userData ? (
                                        userData.hobbies
                                    ) : (
                                        <>データの取得に失敗しました</>
                                    )
                                }
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </PageWrapper>
    );
};