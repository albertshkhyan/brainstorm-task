import { FILE_ACTIONS } from "configs/types";
import createReducer from "helpers/createReducer";


const initialState = {
    users: [],
};
const usersReducer = createReducer(initialState, {
    [FILE_ACTIONS.CREATE_USER_SAGA](state, { payload }) {
        return {
            ...state,
            users: [...payload]
        }
    },
})

//action creators
export const createUserSG = (payload) => ({
    type: FILE_ACTIONS.CREATE_USER_SAGA,
    payload
});


export default usersReducer;