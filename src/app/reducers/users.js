import { USERS_ACTIONS } from "configs/types";
import createReducer from "helpers/createReducer";


const initialState = {
    users: [],
    limitItems: 10,
    totalCount: 0,
    totalPages: 0,
    currentPage: 1,
    isLoading: false,
    isDisabled: false
};
const usersReducer = createReducer(initialState, {
    [USERS_ACTIONS.SET_ALL_USERS](state, { payload }) {
        return {
            ...state,
            users: [...payload]
        }
    },
    [USERS_ACTIONS.SET_CREATED_USER_DATA](state, { payload }) {
        return {
            ...state,
            users: [...state.users, payload]
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
    [USERS_ACTIONS.UPDATE_USER](state, { payload }) {
        return {
            ...state,
            users: state.users.map((item) => {
                if (item.id === payload.id) {
                    return ({
                        ...item,
                        ...payload
                    })
                }
                return item;
            })
        }
    },
    [USERS_ACTIONS.DELETE_USER](state, { userId }) {
        return {
            ...state,
            users: state.users.filter(({ id }) => id !== userId)
        }
    }
})

//action creators
export const setUsersData = (payload) => ({
    type: USERS_ACTIONS.SET_ALL_USERS,
    payload
});
export const setCreatedUserData = (payload) => ({
    type: USERS_ACTIONS.SET_CREATED_USER_DATA,
    payload
});
export const updateUser = (payload) => ({
    type: USERS_ACTIONS.UPDATE_USER,
    payload
});
export const deleteUser = (userId) => ({
    type: USERS_ACTIONS.DELETE_USER,
    userId
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

//Sagas call actions
export const getUsersSG = (page, limit) => ({
    type: USERS_ACTIONS.GET_ALL_USERS_SAGA,
});
export const paginateSG = (page, limit) => ({
    type: USERS_ACTIONS.PAGINATE_SAGA,
    page, limit
});
export const sortingSG = (sort, order) => ({
    type: USERS_ACTIONS.SORTING_SAGA,
    sort, order
});
export const updateSG = (row, checked, setChecked) => {
    return ({
        type: USERS_ACTIONS.UPDATE_USER_SAGA,
        row,
        checked,
        setChecked
    })
};
export const deleteUserSG = (userId) => {
    return ({
        type: USERS_ACTIONS.DELETE_USER_SAGA,
        userId
    })
};
export const createUserSG = (userBody, fileData) => ({
    type: USERS_ACTIONS.CREATE_USER_SAGA,
    userBody,
    fileData
});
export const editUserSG = (userId, userBody, fileData) => ({
    type: USERS_ACTIONS.EDIT_USER_SAGA,
    userId,
    userBody,
    fileData
});

export default usersReducer;