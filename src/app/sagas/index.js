import { all } from "redux-saga/effects";
import usersGetAllSaga from './usersGetAllSaga';
import paginationSaga from './paginationSaga';

export default function* rootSaga() {
    yield all([
        usersGetAllSaga(),
        paginationSaga(),
    ])
}