import { PayloadAction } from '@reduxjs/toolkit';
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { incrementSaga, incrementSagaSuccess } from './counterSlice';

function* handleIncrementSaga(action: PayloadAction<number>) {
    yield delay(1000);

    yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
    console.log("Counter Saga");

    yield takeEvery(incrementSaga.toString(), handleIncrementSaga)
    // yield takeLatest(incrementSaga.toString(), handleIncrementSaga)
}