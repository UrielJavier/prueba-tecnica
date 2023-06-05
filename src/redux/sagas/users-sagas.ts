import { put, takeEvery, all, call } from 'redux-saga/effects'
import { postLogin } from '../../api/users'
import { userTypes } from '@types';

function* loginUser(action: any) {
    const { payload } = action;
    const { data } = yield call(postLogin, payload);

    if (data?.token) {
        yield put({ type: userTypes.LOGIN_USER_OK, payload: { username: data?.username, token: data?.token } })
    } else {
        yield put({ type: userTypes.LOGIN_USER_ERROR, payload: { error: data?.message } })
    }

}

export function* loginUserSaga() {
    yield takeEvery(userTypes.LOGIN_USER_REQUESTED, loginUser)
}