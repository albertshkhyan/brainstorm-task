import { call, takeEvery, put, select } from "redux-saga/effects";

import { USERS_ACTIONS } from "configs/types";


import userAPI from 'api/users';
import { setUsersData, setCurrentPage, setIsLoading, updateUser, deleteUser } from '../reducers/users';

function* deleteUserWorker({ userId }) {
    console.log('deleteUserWorker 📞📞📞📞');
    // console.log('updatedBody in saga33333333333333333', updatedBody);
    try {
        yield put(setIsLoading(true));
        const { data } = yield call(userAPI.deleteUser, userId);
        // console.log('data', data);//no have response😭
        yield put(deleteUser(userId));

        yield put(setIsLoading(false));

    } catch (error) {
        console.log('error', error);
        console.log('error.response', error.response);

    }

}

function* deleteUserWatcher() {
    yield takeEvery(USERS_ACTIONS.DELETE_USER_SAGA, deleteUserWorker);
}

export default deleteUserWatcher;