import { all } from "redux-saga/effects";
import { loginUserSaga } from "./users-sagas";
import { getTaxesFormSaga, getTaxesSaga, postSubmissionTaxSaga } from "./taxes-sagas";

export default function* rootSaga() {
    yield all([
        loginUserSaga(),
        getTaxesSaga(),
        getTaxesFormSaga(),
        postSubmissionTaxSaga()
    ])
  }