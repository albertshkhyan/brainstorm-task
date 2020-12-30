import { call, takeEvery, put } from "redux-saga/effects";

import { USERS_ACTIONS } from "configs/types";
import userAPI from 'api/users';
import { setIsLoading } from '../reducers/users';

function* createUserWorker({ userBody, fileData }) {
    try {
        yield put(setIsLoading(true));

        if (fileData) {
            const res = yield call(userAPI.uploadImage, fileData);
            // console.log('res', res);//{}
        }
        const res = yield call(userAPI.createUser, userBody);
        if (res.status === 201) {
            alert("User created");
        }
        yield put(setIsLoading(false));


    } catch (error) {
        console.log('error.response', error.response);
    }
}

function* createUserWatcher() {
    yield takeEvery(USERS_ACTIONS.CREATE_USER_SAGA, createUserWorker);
}

export default createUserWatcher;