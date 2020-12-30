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
        try {
            const res = await axiosInstance.get(`${config.server.routes.usersGetAll}?_page=${page}&_limit=${limit}`);
            return res;
        } catch (error) {
            console.log('error.response', error.response);
            // throw new Error(error.response.data.errors[0].msg)
        }
    },
    async getSortedUsers(sort, order = "asc", page = 1, limit = 10) {
        try {
            // const res = await axiosInstance.get(`${config.server.routes.usersGetAll}?_sort=${sort}&_order=${order}`);
            const res = await axiosInstance.get(`${config.server.routes.usersGetAll}?_sort=${sort}&_order=${order}&_page=${page}&_limit=${limit}`);
            return res;
        } catch (error) {
            console.log('error.response', error.response);
            // throw new Error(error.response.data.errors[0].msg)
        }
    },

    async patchSwitchToggle(userId, updatedBody) {
        console.log('updatedBody', updatedBody);
        try {
            // const res = await axiosInstance.get(`${config.server.routes.usersGetAll}?_sort=${sort}&_order=${order}`);
            const res = await axiosInstance.patch(`${config.server.routes.toggleSwitch}/${userId}`, updatedBody);
            console.log('res patchSwitchToggle appppppppppiiiiii', res);
            return res;
        } catch (error) {
            console.log('error.response', error.response);
            // throw new Error(error.response.data.errors[0].msg)
        }
    },


}
export default userAPI;