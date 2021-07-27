import { put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import { receiveApiData, requestApiData } from '../actions/users-action';
import { fetchData } from '../../API/index';
import { AnyAction } from 'redux';
import { InformationActionTypes, Information } from '../type-redux';

function* getApiData(action: AnyAction) {
  try {
    // call api
    console.log(1);

    const data: Information = yield call(fetchData);
    console.log(data);
    yield put(receiveApiData(data));
  } catch (error) {
    console.log(error);
  }
}

export default function* mySaga() {
  yield takeLatest(requestApiData, getApiData);
}
