import { useEffect, useState } from "react";
import {PageWrapper} from "../../organisms/wrapper/pageWrapper";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


export const ChatsPage = () => {
    const [friends, setFriends] = useState([]);

    const fetchFriends = () => {
        const data = [
            { id: 1, name: 'Alice', lastMessage: 'Hi there!',lastTime: '2002-02-02',noCheck:2 },
            { id: 2, name: 'Bob', lastMessage: 'How are you?',lastTime: '2002-02-02',noCheck:0 },
            { id: 3, name: 'Charlie', lastMessage: 'See you later!',lastTime: '2002-02-02' ,noCheck:21},
            { id: 4, name: 'Alice', lastMessage: 'Hi there!',lastTime: '2002-02-02',noCheck:2 },
            { id: 5, name: 'Bob', lastMessage: 'How are you?',lastTime: '2002-02-02',noCheck:0 },
            { id: 6, name: 'Charlie', lastMessage: 'See you later!',lastTime: '2002-02-02' ,noCheck:21},
        ];
        setFriends(data);
    };

    useEffect(() => {
        fetchFriends();
      }, []);
    
    return (
        <PageWrapper>
            <Container>
                <Row>
                    {friends.map((friend) => (
                    <Col key={friend.id} sm={12} md={6} lg={4} className="mb-4 mt-4">
                        <Link to={`/chat/${friend.id}`} style={{textDecoration: "none"}}>
                            <Card>
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Card.Title>{friend.name}</Card.Title>
                                        {friend.noCheck ? (
                                            <Badge bg="secondary">{friend.noCheck}</Badge>
                                        ):(
                                            <span></span>
                                        )}
                                    </div>
                                    <Card.Subtitle className="mb-2 text-muted">{friend.lastTime}</Card.Subtitle>
                                    <Card.Text>Last Message: {friend.lastMessage}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    ))}
                </Row>
            </Container>
        </PageWrapper>
    );
};
