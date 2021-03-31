import axios from "axios";

const http = axios.create({
    baseURL: "https://nurkadyrnur.pythonanywhere.com"
})

http.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token")
    if (token !== null){
        config.headers.Authorization = "Token "+token
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

export default http;