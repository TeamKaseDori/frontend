import axios from "axios";

// const EndpointUrl:string = import.meta.env.VITE_API_URL
const EndpointUrl = ""

export const apiClient = axios.create({
    baseURL: EndpointUrl,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});


export const authHeader = (token) => ({
    headers: { Authorization: `Bearer ${token}` },
});
