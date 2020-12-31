import { all } from "redux-saga/effects";

import sortingSaga from './sortingSaga';
import editUserSaga from './editUserSaga';
import paginationSaga from './paginationSaga';
import updateUserSaga from './updateUserSaga';
import createUserSaga from './createUserSaga';
import usersGetAllSaga from './usersGetAllSaga';
import deleteUsersSaga from './deleteUsersSaga';

export default function* rootSaga() {
    yield all([
        sortingSaga(),
        editUserSaga(),
        paginationSaga(),
        updateUserSaga(),
        createUserSaga(),
        usersGetAllSaga(),
        deleteUsersSaga(),
    ])
}