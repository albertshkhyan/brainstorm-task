import { call, takeEvery, put, select } from "redux-saga/effects";

import { USERS_ACTIONS } from "configs/types";


import userAPI from 'api/users';
import { setUsersData, setCurrentPage, setIsLoading, updateUser } from '../reducers/users';

function* updateUserWorker({ row, checked, setChecked }) {
    console.log('checked', checked);
    console.log('updateUserWorker 📞📞📞📞');
    // console.log('updatedBody in saga33333333333333333', updatedBody);
    try {
        // const limitItems = yield select((state) => state.users.limitItems);
        // const currentPage = yield select((state) => state.users.currentPage);
        const updatedBody = {
            ...row,
            disabled: checked,
        };
        console.log('updatedBody in saga111111111111111', updatedBody);
        yield put(setIsLoading(true));
        const { data: updatedUser } = yield call(userAPI.patchSwitchToggle, row.id, updatedBody);
        console.log('updatedUser responsoe updated 2222222222222222', updatedUser);
        // yield setChecked(checked)
        // console.log('usersData UPDATE ----------', usersData);
        yield put(updateUser(updatedUser));

        yield put(setIsLoading(false))



    } catch (error) {
        console.log('error', error);
        console.log('error.response', error.response);

    }

}

function* updateUserWatcher() {
    yield takeEvery(USERS_ACTIONS.UPDATE_USER_SAGA, updateUserWorker);
}

export default updateUserWatcher;