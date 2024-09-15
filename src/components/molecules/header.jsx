import { Navbar, Nav, Container } from 'react-bootstrap';


export const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="/">SAI Matching</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/logout">ログアウト</Nav.Link>
                <Nav.Link href="/login">ログイン</Nav.Link>
                <Nav.Link href="/signup">アカウント登録</Nav.Link>
                <Nav.Link href="/user">ユーザー</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};
