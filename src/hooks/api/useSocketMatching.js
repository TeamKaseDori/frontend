import { useEffect } from "react";
import { getUserFromSessionStorage } from "../sessionStorage/userSessionStorage";

const endPointURL = import.meta.env.VITE_API_URL
const retrievedUser = getUserFromSessionStorage();

export const WebSocketMatching = () => {
    useEffect ( () => {
        const ws = new WebSocket(endPointURL + "/matching?token=" + retrievedUser.token);
        ws.onopen = () => {
            console.log('WebSocket connected');
        };

        return () => {
            ws.close();
        };

    });
};