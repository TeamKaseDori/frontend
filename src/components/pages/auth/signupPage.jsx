import {PageWrapper} from "../../organisms/wrapper/pageWrapper";
import { Container, Alert, Form, Button, Spinner } from 'react-bootstrap';
import { useState } from 'react';
import { useSignUp } from "../../../hooks/api/useApiAuth";
import { HobbiesSelector } from "../../molecules/hobbiesSelector/hobbiesSelector";
import { hobbies } from "../../data/dataSet";

export const SignupPage = () => {
    const { doSignUp, loading, error, setError } = useSignUp();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("2000-01-01");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [gender, setGender] = useState("その他");
    const [userHobbies, setUserHobbies] = useState([]);

    const signUpData = {
        username: username,
        email: email,
        password: password,
        birthday: birthday,
        gender: gender,
        hobbies: userHobbies,
    }

    const handleChangeText = (set) => (event) => {
        const newText = event.target.value;
        set(newText);
    };

    const SelectGenders = (e) => {
        setGender(e.target.value);
    }

    const onClickSignUp = () => {
        // alert(
        //     `${username}\n${email}\n${password}\n${confirm}\n
        //         ${gender}\n${birthday}\n${userHobbies}`
        // );
        doSignUp(signUpData);
    };

    const inputFields = [
        { label: "名前", placeholder: "Enter name", inputValue: username, 
            handleChange: handleChangeText(setUsername) ,type: "text"},
        { label: "メールアドレス", placeholder: "email", inputValue: email, 
            handleChange: handleChangeText(setEmail) ,type: "email"},
        { label: "生年月日", placeholder: "", inputValue: birthday, 
            handleChange: handleChangeText(setBirthday), type: "date" },
        { label: "パスワード", placeholder: "password",inputValue: password, 
            handleChange: handleChangeText(setPassword), type: "password"},
        { label: "パスワード(確認)", placeholder: "confirm", inputValue: confirm, 
            handleChange: handleChangeText(setConfirm), type: "password"},
    ];

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
                        <h1 className="mt-4 mb-4">アカウント登録</h1>
                        {error ? (
                        <Alert variant="danger" onClose={() => setError(false)} dismissible>
                            <Alert.Heading>アカウント登録に失敗しました</Alert.Heading>
                            <p>
                                アカウント登録に失敗しました。フォームの内容をもう一度確認してください。
                            </p>
                        </Alert>
                        ) : null } 

                        <Form>
                            {inputFields.map((field, index) => (
                                <div key={index}>
                                    <Form.Group className="mb-3" controlId={`signup${index}`}>
                                        <Form.Label>{field.label}</Form.Label>
                                        <Form.Control type={field.type} placeholder={field.placeholder} value={field.inputValue} onChange={field.handleChange}
                                            required/>
                                        <Form.Text className="text-muted">
                                        </Form.Text>
                                    </Form.Group>
                                </div>
                            ))}

                            <div style={{ height: '12px'}}></div>

                            <Form.Select
                                aria-label="select"
                                onChange={SelectGenders}
                                id="SelectGenders"
                                className="mt-2 mb-4" 
                            >
                                <option>性別を選んでください</option>
                                <option value="男性">男性</option>
                                <option value="女性">女性</option>
                                <option value="その他">その他</option>
                                <option value="回答しない">回答しない</option>
                            </Form.Select>

                            <HobbiesSelector
                                hobbies={hobbies}
                                userHobbies={userHobbies}
                                setUserHobbies={setUserHobbies}
                            />

                            <Button variant="dark" type="submit" className="mt-2 mb-4" onClick={onClickSignUp} size="lg">
                                登録する
                            </Button>
                        </Form>

                        <p>アカウントはお持ちですか？
                            <Alert.Link href="/login">ログイン</Alert.Link>
                            する
                        </p>
                    </>
                )}
                <div style={{ height: '32px'}}></div>
            </Container>
        </PageWrapper>
    );
};