import { Container, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Footer = () => {

    return (
        <footer className="bg-dark text-white py-3">
            <Container className="text-center">
                <Link to="/" style={{textDecoration: "none", color:"white"}}>
                    <h3 className="mt-2 mb-4">SAI Matching</h3>
                </Link>

                <p>Made by チームカサ鳥 2024</p>
                <p>【技育CAMP2024】ハッカソン Vol.14</p>
            
                <div style={{ height: '64px'}}></div>
            </Container>
        </footer>
    );
}