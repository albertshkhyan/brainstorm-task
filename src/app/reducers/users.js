import { USERS_ACTIONS } from "configs/types";
import createReducer from "helpers/createReducer";


const initialState = {
    users: [],
};
const usersReducer = createReducer(initialState, {
    [USERS_ACTIONS.ADD_USER](state, { payload }) {
        return {
            ...state,
            data: { ...payload }
        }
    }
});

//action creators
export const setUserData = (payload) => {
    return ({
        type: USERS_ACTIONS.ADD_USER,
        payload
    })
}

export default usersReducer;