import React from 'react';
import { useEffect, useMemo, useState, useCallback } from "react";
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
  useEffect(() => {
    // dispatch(setParams({noofRecords: 10, idStarts: 1001}));
    dispatch(getEmployees({noofRecords: 10, idStarts: 1001}));
  }, [dispatch]);
  
  const employeeList = useSelector((state) => state?.reducers?.employees);
  let filteredList = employeeList && employeeList.slice(-10);
  
  const handlePrevClick = useCallback(() => {
    console.log("pre click");
    filteredList = employeeList && employeeList.slice(10);
  }, [ employeeList ]);

  const getEmployeeListComp = useMemo(() => <EmployeeList employeeList={filteredList} handlePrevClick={handlePrevClick}/>, [filteredList, handlePrevClick]);
  const buttonComp = useMemo(() => <Button />, []);
  return (
    <div>
      <Header />
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}> Addition </button>
      {buttonComp}
      <TestButton />
      {getEmployeeListComp}
    </div>
  );
}

export default App;
