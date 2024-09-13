import { useState, useCallback } from "react";
import { getUserFromSessionStorage, saveUserToSessionStorage } from "../sessionStorage/userSessionStorage";
import { apiClient, authHeader } from "./endpointUrl";
import { useNavigate } from "react-router-dom";

// ログイン
export const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate()

    const doLogin = useCallback(async(username, password) => {
        try {
            console.log("ログイン");
            setLoading(true);
            setError(false);

            const result = await apiClient.post('/auth/login', { username, password });

            const user = {
                is_login: true,
                username: result.data.username,
                email: result.data.email,
                token: result.data.token,
            };
            saveUserToSessionStorage(user);
            navigate('/');
            alert("ログインしました");
        } catch {
            setError(true);
            alert("ログインに失敗しました");

        } finally {
            setLoading(false);  
        }
    }, [navigate])
    return { doLogin, loading, error, setError}
}


// ログアウト
export const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate()
    const retrievedUser = getUserFromSessionStorage();

    const doLogout = useCallback(async() => {
        if(retrievedUser.is_login){
            try {
                console.log("ログアウト");
                setLoading(true);
                setError(false);

                await apiClient.post('/auth/logout', {}, authHeader(retrievedUser.token));
                sessionStorage.clear();
                navigate('/login');
                alert("ログアウトしました");

            } catch {
                setError(true);
                alert("ログアウトに失敗しました");

            } finally {
                setLoading(false);
            }
        }
    },[navigate, retrievedUser.is_login, retrievedUser.token]);
    return { doLogout, loading, error, setError }
}


// サインアップ
export const useSignUp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate()

    const doSignUp = useCallback(async(data) => {
        try {
            console.log("サインアップ");
            setLoading(true);
            setError(false);

            await apiClient.post('/auth/register', data);
            navigate('/login');
            alert('新規登録しました');

        } catch {
            setError(true);
            alert("登録に失敗しました");

        } finally {
            setLoading(false);
        }
    }, [navigate]);
    return { doSignUp, loading, error, setError }
}