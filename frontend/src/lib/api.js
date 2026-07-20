import axios from "axios";
console.log("API URL =", process.env.NEXT_PUBLIC_API_URL);
const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
})

export default api;