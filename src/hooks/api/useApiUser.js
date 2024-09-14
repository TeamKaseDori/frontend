import { useCallback, useState } from "react";
import { getUserFromSessionStorage } from "../sessionStorage/userSessionStorage";
import { apiClient, authHeader } from "./endpointUrl";

export const useGetUser = () => {
    const [userData, setUserData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const retrievedUser = getUserFromSessionStorage();

    const getUser = useCallback(async() => {
        if (retrievedUser.is_login) {
            try {
                setLoading(true);
                setError(false);

                const result = await apiClient.get('/user', authHeader(retrievedUser.token))
                const data = result.data.user;
                setUserData(data);
                console.log("データ取得成功");

            } catch { 
                setError(true) 
                alert("ユーザーデータの取得に失敗しました");
            }
            finally { setLoading(false) }
        } else {
            alert("ログインが必要です");
        }
    }, [retrievedUser]);

    return { getUser, userData, loading, error, setError };
};
