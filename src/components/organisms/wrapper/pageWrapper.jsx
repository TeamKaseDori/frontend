import { Container, Button } from 'react-bootstrap';
import { getUserFromSessionStorage } from '../../../hooks/sessionStorage/userSessionStorage';
import { Footer } from '../../molecules/footer';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'; 
import { Header } from "../../molecules/header";

export const PageWrapper = (props) => {
    const { isHeader = true, is_auth = false , children } = props;
    const retrievedUser = getUserFromSessionStorage();
    const navigate = useNavigate();
    const onClickGoLogin = () => {
        navigate('/login');
    };

    return (
        <>
            {retrievedUser && retrievedUser.is_login ? (
                <>
                    {isHeader && <Header />}
                    <Container className="" style={{ minHeight: '100vh',}}>
                        {children}
                    </Container>
                </>
            ) : is_auth ? (
                <>
                    <Container className="" style={{ minHeight: '100vh',}}>
                        {children}
                    </Container>
                </>
            ) : (
                <Container className="text-center">
                    <div style={{ height: '20vh'}}></div>
                    <p className="display-6 mt-4 mb-4">仮称）祭りマッチングへようこそ！</p>
                    <p className="display-8 mt-4 mb-4">ご利用にはログインが必要です</p>

                    <Button variant="outline-dark" onClick={onClickGoLogin}  size="lg">
                        ログインする
                    </Button>
                    <div style={{ height: '80vh'}}></div>
                </Container>
            )}
            <Footer />
        </>
    );
};

PageWrapper.propTypes = {
    isHeader: PropTypes.bool,
    is_auth: PropTypes.bool,
    children: PropTypes.node
};