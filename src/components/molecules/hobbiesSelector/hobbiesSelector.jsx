import PropTypes from 'prop-types';
import { Container, Alert, Badge, } from 'react-bootstrap';
import classes from './hobbiesSelector.module.css';

export const HobbiesSelector = ({ hobbies, userHobbies, setUserHobbies }) => {
    const handleHobbyClick = (hobby) => {
        if (userHobbies.includes(hobby)) {
            setUserHobbies(userHobbies.filter((selectedHobby) => selectedHobby !== hobby));
        } else {
            if(userHobbies.length >= 6){
                alert("趣味は最大６個まで追加できます");
            } else{
                setUserHobbies([...userHobbies, hobby]);
            }
        }
    };

    return (
        <Container>
            <p>あなたの趣味</p>
            {userHobbies.length > 0 ? (
                <div className={classes.hobbyBadgeContainer}>
                    {userHobbies.map((hobby, index) => (
                        <Badge key={index} bg="light" text="dark" className="mt-2 mb-2">
                            {hobby}
                        </Badge>
                    ))}
                </div>
            ) : (
                <Alert key="danger" variant="danger">
                    趣味を選択してください
                </Alert>
            )}
            <p>趣味一覧</p>
            <div className={classes.hobbyBadgeContainer}>
                {hobbies.map((hobby, index) => (
                        <Badge key={index} onClick={() => handleHobbyClick(hobby)} className="mb-3"
                        bg={userHobbies.includes(hobby) ? 'primary' : 'Light'} 
                        text={userHobbies.includes(hobby) ? '' : 'dark'} 
                        >
                            {hobby}
                        </Badge>
                ))}
            </div>
        </Container>
    );
};

HobbiesSelector.propTypes = {
    hobbies: PropTypes.arrayOf(PropTypes.string).isRequired,
    userHobbies: PropTypes.arrayOf(PropTypes.string).isRequired,
    setUserHobbies: PropTypes.func.isRequired,
};