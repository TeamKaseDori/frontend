import { useNavigate } from "react-router-dom";
import { getUserFromSessionStorage } from "../../hooks/sessionStorage/userSessionStorage";
import React from "react";
import { Container, Button } from 'react-bootstrap';

export const Page404 = () => {

    const retrievedUser = getUserFromSessionStorage();

    const navigate = useNavigate();

    const onClickGoLogin = () => {
        navigate('/login')
    };

    const onClickGoHome = () => {
        navigate('/')
    };

    return (
        <Container className="text-center">
            <div style={{ height: '20vh'}}></div>
            <p className="display-6 mt-4 mb-4">ページが見つかりませんでした</p>
            
            
            {
                retrievedUser.is_login ? (
                    <Button variant="outline-dark" onClick={onClickGoHome}  size="lg">
                        ホームに戻る
                    </Button>
                ) : (
                    <Button variant="outline-dark" onClick={onClickGoLogin}  size="lg">
                        ログインする
                    </Button>
                )
            }
        </Container>
    );
};

