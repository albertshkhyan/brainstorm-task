import { call, takeEvery, put, select } from "redux-saga/effects";

import { USERS_ACTIONS } from "configs/types";

import userAPI from 'api/users';
import { setIsLoading } from '../reducers/users';

function* editUserWorker({ userId, userBody, fileData }) {

    try {
        yield put(setIsLoading(true));

        if (fileData) {
            const res = yield call(userAPI.uploadImage, fileData);
            console.log('res', res);//
        }
        const res = yield call(userAPI.editUser, userId, userBody);
        if (res.status === 200) {
            alert("User updated")
        }
        yield put(setIsLoading(false));

    } catch (error) {
        console.log('error.response', error.response);

    }

}

function* editUserWatcher() {
    yield takeEvery(USERS_ACTIONS.EDIT_USER_SAGA, editUserWorker);
}

export default editUserWatcher;