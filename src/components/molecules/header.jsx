import { Navbar, Nav, Container } from 'react-bootstrap';


export const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="/">
                <img
                    src={"/icon.png"}
                    alt="SAI Matching Icon"
                    width="30"  // アイコンの幅
                    height="30" // アイコンの高さ
                    className="d-inline-block align-top"
                    style={{ marginRight: '10px' }} // テキストとの間に余白を追加
                />
                SAI Matching
            </Navbar.Brand>
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
