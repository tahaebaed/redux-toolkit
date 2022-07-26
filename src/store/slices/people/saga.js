import { createAction } from '@reduxjs/toolkit'
import { call, takeEvery, put } from 'redux-saga/effects'
import { fetchData, fetchFailed } from './people'

export const getSagaRequest = createAction('people/getSagaRequest')

export function* fetchDataSaga() {
  try {
    const res = yield call(() => fetch('https://swapi.dev/api/people'))
    const data = yield res.json()
    yield put(fetchData(data))
  } catch (e) {
    yield put(fetchFailed(e))
  }
}

export default function* rootSaga() {
  yield takeEvery(getSagaRequest, fetchDataSaga)
}
