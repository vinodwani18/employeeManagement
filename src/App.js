import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmployeeList from './components/EmployeeList';
import Header from './components/Header';
import { getEmployees } from './actions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);
  const employeeList = useSelector((state) => state?.reducers?.employees);
  return (
    <div>
      <Header />
      <EmployeeList employeeList={employeeList}/>
    </div>
  );
}

export default App;
