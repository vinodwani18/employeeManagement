import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmployeeList from './components/EmployeeList';
import Button from './components/Button';
import TestButton from './components/TestButton';
import Header from './components/Header';
import { getEmployees } from './actions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const [num, setNum] = useState(0);
  const [filteredList, setFilteredList] = useState([]);
  
  // Initialize 'params' state with the default values
  const [params, setParams] = useState({ noofRecords: 10, idStarts: 1001 });

  useEffect(() => {
    // Dispatch the initial action to fetch employees
    dispatch(getEmployees(params));
  }, [dispatch, params]); // Make sure to include 'params' in the dependencies

  const employeeList = useSelector((state) => state?.reducers?.employees);
  const qParams = useSelector((state) => state?.reducers?.queryParams);

  useEffect(() => {
    if (employeeList && qParams) {
      setFilteredList(employeeList.slice(-10));
      // Update the 'params' state with the latest 'qParams' from Redux
      setParams(qParams);
    }
  }, [employeeList, qParams]);
  
  const handlePrevClick = useCallback(() => {
    console.log(params); // You can see the 'params' state here
    let newParams = {
      noofRecords: params.noofRecords,
      idStarts: parseInt(params.idStarts) - 10,
    };
    dispatch(getEmployees(newParams));
  }, [dispatch, params]); // Include 'params' and 'employeeList' in the dependencies

  const getEmployeeListComp = useMemo(() => (
    <EmployeeList employeeList={filteredList} handlePrevClick={handlePrevClick} />
  ), [filteredList, handlePrevClick]);
  const buttonComp = useMemo(() => <Button />, []);

  return (
    <div>
      <Header />
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>Addition</button>
      {buttonComp}
      <TestButton />
      {getEmployeeListComp}
    </div>
  );
}

export default App;
