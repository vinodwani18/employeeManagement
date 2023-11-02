import { put, takeLatest} from 'redux-saga/effects';
import {employee_api_URL} from '../Constants'
function* fetchEmployees() {
  const data = yield fetch(employee_api_URL)
        .then(response => response.json(), );    
  yield put({ type: "SET_EMPLOYEES", employeeData: data, });
}
export default function* rootSaga() {
     yield takeLatest('GET_EMPLOYEES', fetchEmployees)
}
