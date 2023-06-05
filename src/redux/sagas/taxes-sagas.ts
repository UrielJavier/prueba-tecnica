import { put, takeEvery, all, call } from 'redux-saga/effects'
import { getTaxes, getTaxesForm, postTaxesForm } from '../../api/taxes'
import { taxesTypes } from '@types';

function* getTaxesFlow(action: any) {
    const { data } = yield call(getTaxes);
    if (data?.taxes) yield put({ type: taxesTypes.TAXES_OK, payload: data })

}

export function* getTaxesSaga() {
    yield takeEvery(taxesTypes.TAXES_REQUESTED, getTaxesFlow)
}

function* getTaxesFormFlow(action: any) {
    const taxId = action.taxId;
    const { data } = yield call(getTaxesForm, taxId);
    if (data?.inputFields) yield put({ type: taxesTypes.SUBMISSION_FORM_OK, payload: data })

}

export function* getTaxesFormSaga() {
    yield takeEvery(taxesTypes.SUBMISSION_FORM_REQUESTED, getTaxesFormFlow)
}

function* postSubmissionTaxFlow(action: any) {
    const {taxId, formData} = action;
    const { data } = yield call(postTaxesForm, taxId, formData);
    if (data) yield put({ type: taxesTypes.SUBMISSION_CREATE_OK, payload: {taxId, data}})
}

export function* postSubmissionTaxSaga() {
    yield takeEvery(taxesTypes.SUBMISSION_CREATE_REQUESTED, postSubmissionTaxFlow)
}