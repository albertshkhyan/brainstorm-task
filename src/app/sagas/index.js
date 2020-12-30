import { all } from "redux-saga/effects";
import usersGetAllSaga from './usersGetAllSaga';
import paginationSaga from './paginationSaga';
import sortingSaga from './sortingSaga';
import updateUserSaga from './updateUserSaga';

export default function* rootSaga() {
    yield all([
        sortingSaga(),
        paginationSaga(),
        usersGetAllSaga(),
        updateUserSaga(),
    ])
}