import axios from "axios";
import config from "../config";

const axiosInstance = axios.create({
    baseURL: config.apiEndpoint
})

console.log(config.apiEndpoint)

export default axiosInstance