import { put, fork, takeLatest } from 'redux-saga/effects';
import { get, post } from 'axios';
import {
  constants as exampleConstants,
  actions as exampleActions,
} from '../modules/example';

export function* fetchExampleData() {
  // const reqBody = {
  //   query: `{
  //     users {
  //       name,
  //       email
  //     }
  //   }`,
  // };
  // const result = yield post('/graphql', reqBody)
  //   .then((res) => {
  //     const { users } = res.data.data;
  //     return users;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  const result = yield get('v1/todos')
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  yield put(exampleActions.updateExample(result));
}

function* watchGetExample() {
  yield takeLatest(exampleConstants.GET_EXAMPLE, fetchExampleData);
}

export const exampleSaga = [fork(watchGetExample)];
