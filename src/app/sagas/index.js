import { all } from "redux-saga/effects";
import usersGetAllSaga from './usersGetAllSaga';
import paginationSaga from './paginationSaga';
import sortingSaga from './sortingSaga';
import updateUserSaga from './updateUserSaga';
import deleteUsersSaga from './deleteUsersSaga';
import createUserSaga from './createUserSaga';

export default function* rootSaga() {
    yield all([
        sortingSaga(),
        paginationSaga(),
        updateUserSaga(),
        createUserSaga(),
        usersGetAllSaga(),
        deleteUsersSaga(),
    ])
}