import config from "configs/config.js";
import axiosInstance from 'helpers/axios';

/*
* setClientToken
    config.headers.Authorization = `Bearer ${token}`
    return config;
*/



//on login and register we not send Bearer token
const userAPI = {
    async getAllUsers() {
        // You don't need to stringify your payload. Axios will do it for you when it it send a request.
        try {
            const res = await axiosInstance.get(config.server.routes.usersGetAll);
            return res;
        } catch (error) {
            console.log('error.response', error.response);
            // throw new Error(error.response.data.errors[0].msg)
        }
    },
    async getUsers(page = 1, limit = 10) {
        // You don't need to stringify your payload. Axios will do it for you when it it send a request.
        // console.log('config.server.routes', config.server.routes);
        // console.log("-------------", config.server.routes.usersGetByPaginate`_page=${page}&_limit=${limit}`)
        try {
            const res = await axiosInstance.get(`https://brainstorm-interview-task.herokuapp.com/users?_page=${page}&_limit=${limit}`);
            return res;
        } catch (error) {
            console.log('error.response', error.response);
            // throw new Error(error.response.data.errors[0].msg)
        }
    },
}
export default userAPI;