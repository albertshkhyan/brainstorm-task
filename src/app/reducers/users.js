import { USERS_ACTIONS } from "configs/types";
import createReducer from "helpers/createReducer";


const initialState = {
    users: [],
    limitItems: 10,
    totalCount: 0,
    totalPages: 0,
    currentPage: 1,
    isLoading: false
};
const usersReducer = createReducer(initialState, {
    [USERS_ACTIONS.SET_ALL_USERS](state, { payload }) {
        return {
            ...state,
            data: [...payload]
        }
    },
    [USERS_ACTIONS.SET_TOTOAL_COUNT](state, { payload }) {
        return {
            ...state,
            totalCount: payload
        }
    },
    [USERS_ACTIONS.SET_IS_LOADING](state, { payload }) {
        return {
            ...state,
            isLoading: payload
        }
    },
    [USERS_ACTIONS.SET_TOTOAL_PAGE_COUNT](state, { payload }) {
        return {
            ...state,
            totalPages: payload
        }
    },
    [USERS_ACTIONS.SET_CURRENT_PAGE](state, { payload }) {
        return {
            ...state,
            currentPage: payload
        }
    },
});

//action creators
export const setUsersData = (payload) => ({
    type: USERS_ACTIONS.SET_ALL_USERS,
    payload
});
export const setTotoalPageCount = (payload) => ({
    type: USERS_ACTIONS.SET_TOTOAL_PAGE_COUNT,
    payload
});
export const setIsLoading = (payload) => ({
    type: USERS_ACTIONS.SET_IS_LOADING,
    payload
});
export const setPageCount = (payload) => ({
    type: USERS_ACTIONS.SET_PAGE_COUNT,
    payload
});
export const setTotoalCount = (payload) => ({
    type: USERS_ACTIONS.SET_TOTOAL_COUNT,
    payload
});
export const setCurrentPage = (payload) => ({
    type: USERS_ACTIONS.SET_CURRENT_PAGE,
    payload
});

export const getUsersSG = (page, limit) => ({
    type: USERS_ACTIONS.GET_ALL_USERS_SAGA,
});
export const paginateSG = (page, limit) => ({
    type: USERS_ACTIONS.PAGINATE_SAGA,
    page, limit
});

export default usersReducer;