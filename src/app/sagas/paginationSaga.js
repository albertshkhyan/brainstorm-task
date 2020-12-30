import { call, takeEvery, put, select } from "redux-saga/effects";

import { USERS_ACTIONS } from "configs/types";


import userAPI from 'api/users';
import { setUsersData, setCurrentPage, setIsLoading } from './../reducers/users';

function* paginationWorker({ page, limit }) {
    try {

        yield put(setIsLoading(true));
        const { data: usersData } = yield call(userAPI.getUsers, page, limit);
        // yield put(setTotoalPageCount(totalPages));
        yield put(setUsersData(usersData));
        yield put(setCurrentPage(page));
        //
        yield put(setIsLoading(false))



    } catch (error) {
        console.log('error', error);
        console.log('error.response', error.response);

    }

}

function* paginationWatcher() {
    yield takeEvery(USERS_ACTIONS.PAGINATE_SAGA, paginationWorker);
}

export default paginationWatcher;