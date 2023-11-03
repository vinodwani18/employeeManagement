import { put, takeLatest} from 'redux-saga/effects';
import {employee_api_URL} from '../Constants'
function* fetchEmployees(params) {
  console.log(params);
  let api = employee_api_URL + "noofRecords=" + params.params.noofRecords + "&idStarts=" + params.params.idStarts;

  const data = yield fetch(api)
        .then(response => response.json(), );    
  yield put({ type: "SET_EMPLOYEES", employeeData: data, });
  yield put({ type: "SET_PARAMS", params: params.params, });
}
export default function* rootSaga() {
     yield takeLatest('GET_EMPLOYEES', fetchEmployees)
}
