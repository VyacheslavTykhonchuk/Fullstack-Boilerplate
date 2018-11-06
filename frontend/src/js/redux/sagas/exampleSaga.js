import { put, fork, takeLatest } from 'redux-saga/effects';
import { get } from 'axios';
import {
  constants as exampleConstants,
  actions as exampleActions,
} from '../modules/example';

export function* fetchExampleData() {
  const result = yield get('v1/todos')
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(result);
  yield put(exampleActions.updateExample(result));
}

function* watchGetExample() {
  yield takeLatest(exampleConstants.GET_EXAMPLE, fetchExampleData);
}

export const exampleSaga = [fork(watchGetExample)];
