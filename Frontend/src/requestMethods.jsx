import axios from "axios";
// const BASE_URL = "http://localhost:3000/api/";
const BASE_URL = "https://e-commerce-pi-steel.vercel.app/api/"
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2N2I5M2NjNTkzYjQzY2I5MmQwNWE4MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxOTM3NDk1MywiZXhwIjoxNzE5ODA2OTUzfQ.rZza2alaLxJ0g7xZBwIQ5G9l9ajzpwFIGfAe_nfLiKA" ;


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