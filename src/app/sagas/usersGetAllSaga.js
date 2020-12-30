import { call, takeEvery, put, select } from "redux-saga/effects";

import { USERS_ACTIONS } from "configs/types";


import userAPI from 'api/users';
import { setUsersData, setTotoalCount, setIsLoading, setTotoalPageCount } from './../reducers/users';

function* userGetAllWorker(action) {
    try {
        const limitItems = yield select((state) => state.users.limitItems);

        yield put(setIsLoading(true));
        const { data: allUsers } = yield call(userAPI.getAllUsers);
        const { data: usersData } = yield call(userAPI.getUsers);
        const totalCount = allUsers.length + 1;
        yield put(setTotoalCount(totalCount));
        let totalPages = yield Math.ceil(totalCount / limitItems);//always math.ceil 
        yield put(setTotoalPageCount(totalPages));
        yield put(setUsersData(usersData));
        //
        // setTotoalPageCount
        yield put(setIsLoading(false))



    } catch (error) {
        console.log('error', error);
        console.log('error.response', error.response);

    }

}

function* userGetAllWatcher() {
    yield takeEvery(USERS_ACTIONS.GET_ALL_USERS_SAGA, userGetAllWorker);
}

export default userGetAllWatcher;