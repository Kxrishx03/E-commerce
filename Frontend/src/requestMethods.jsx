import axios from "axios";
// const BASE_URL = "http://localhost:3000/api/";
const BASE_URL = "https://e-commerce-pi-steel.vercel.app/api/"



const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
    baseURL:BASE_URL,
});

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
}) 