import { Container } from "react-bootstrap";
import { PageWrapper } from "../../organisms/wrapper/pageWrapper"
import { useParams } from "react-router-dom";

export const ChatPage = () => {
    const { id } = useParams();
    return (
        <PageWrapper>
            <Container>
                <h3>{id}</h3>
                <p>詳細</p>
            </Container>
        </PageWrapper>
    );
};