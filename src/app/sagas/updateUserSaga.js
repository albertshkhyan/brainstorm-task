import { call, takeEvery, put, select } from "redux-saga/effects";

import { USERS_ACTIONS } from "configs/types";
import userAPI from 'api/users';
import { setIsLoading, updateUser } from '../reducers/users';

function* updateUserWorker({ row, checked }) {
    try {
        const updatedBody = {
            ...row,
            disabled: checked,
        };
        yield put(setIsLoading(true));
        const { data: updatedUser } = yield call(userAPI.patchSwitchToggle, row.id, updatedBody);
        yield put(updateUser(updatedUser));
        yield put(setIsLoading(false))
    } catch (error) {
        console.log('error.response', error.response);
    }
}
function* updateUserWatcher() {
    yield takeEvery(USERS_ACTIONS.UPDATE_USER_SAGA, updateUserWorker);
}

export default updateUserWatcher;