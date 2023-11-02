import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmployeeList from './container/EmployeeList';
import { getEmployees } from './actions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);
  const employeeList = useSelector((state) => state?.reducers?.employees);
  console.log(employeeList);
  return (
    <div>
      <EmployeeList />
    </div>
  );
}

export default App;
