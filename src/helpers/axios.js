import * as axios from "axios";
import config from "configs/config.js";

const baseURL = config.server.host;//
console.log('baseURL', baseURL);

let headers = {};


const axiosInstance = axios.create({
    baseURL,
    headers,
});
export default axiosInstance;
