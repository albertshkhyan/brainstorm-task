import { call, takeEvery, put, select } from "redux-saga/effects";

import { USERS_ACTIONS } from "configs/types";


import userAPI from 'api/users';
import { setUsersData, setCurrentPage, setIsLoading } from '../reducers/users';

function* sortingWorker({ sort, order }) {
    try {
        const limitItems = yield select((state) => state.users.limitItems);
        const currentPage = yield select((state) => state.users.currentPage);

        yield put(setIsLoading(true));
        const { data: usersData } = yield call(userAPI.getSortedUsers, sort, order, currentPage, limitItems);
        // yield put(setTotoalPageCount(totalPages));
        yield put(setUsersData(usersData));
        //
        yield put(setIsLoading(false))



    } catch (error) {
        console.log('error.response', error.response);

    }

}

function* sortingWatcher() {
    yield takeEvery(USERS_ACTIONS.SORTING_SAGA, sortingWorker);
}

export default sortingWatcher;