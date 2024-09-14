// ユーザー情報を保存する関数
export const saveUserToSessionStorage = (object) => {
    try {
        const jsonString = JSON.stringify(object);
        sessionStorage.setItem("user", jsonString);
    } catch (error) {
        console.error("ユーザー情報の保存に失敗しました:", error);
    }
};


// ユーザー情報を取得する関数
const noLoginUser = {
    is_login: true,
    is_matching: false,
    email: "",
    username: "",
    token: "",
}
export const getUserFromSessionStorage = () => {
    try {
        let loginUser = noLoginUser;

        const sessionItem = sessionStorage.getItem("user");
        if( sessionItem != null &&
            sessionItem != undefined &&
            sessionItem !== "undefined" &&
            sessionItem !== ""){
            loginUser = JSON.parse(sessionItem)
        }
        return loginUser;

    } catch (error) {
        console.error("ユーザー情報の取得に失敗しました:", error);
        return noLoginUser;
    }
};


