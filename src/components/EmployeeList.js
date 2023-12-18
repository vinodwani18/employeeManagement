import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from '../actions';
import { Link } from 'react-router-dom';

function EmployeeList() {
  const dispatch = useDispatch();
  const [params, setParams] = useState({ noofRecords: 10, idStarts: 1001 });
  const [filteredList, setFilteredList] = useState([]);

  const employeeList = useSelector((state) => state?.reducers?.employees);
  const qParams = useSelector((state) => state?.reducers?.queryParams);

  useEffect(() => {
    // Dispatch the initial action to fetch employees
    dispatch(getEmployees(params));
  }, [dispatch, params]); // Make sure to include 'params' in the dependencies

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

  let newParams= {
    noofRecords:params?.noofRecords,
    idStarts:parseInt(params?.idStarts) + 10
 }
  

  return (
    filteredList.length > 0 ? ( // Check if the employeeList has elements
      <>
        <Link to="/aboutus">About us</Link>
        <div className='listTable'>
          <div className='listTableRow'>
            <div className='rowCell'>Customer ID</div>
            <div className='rowCell'>Customer Name</div>
            <div className='rowCell'>Customer Address</div>
            <div className='rowCell'>Age</div>
            <div className='rowCell'>Contact Number</div>
            <div className='rowCell'>Email</div>
            <div className='rowCell'>Date of Birth</div>
          </div>
          {filteredList.map((employee) => (
            <div className='listTableRow' key={employee.id}>
              <div className='rowCell'>{employee.id}</div>
              <div className='rowCell'>{employee.firstName}</div>
              <div className='rowCell'>{employee.address}</div>
              <div className='rowCell'>{employee.age}</div>
              <div className='rowCell'>{employee.contactNumber}</div>
              <div className='rowCell'>{employee.email}</div>
              <div className='rowCell'>{employee.dob}</div>
            </div>
          ))}
        </div>
        <button onClick={() => dispatch(getEmployees(newParams))}>Next</button>
        <button onClick={() => handlePrevClick()}>Previous</button>
      </>
    ) : null
  );
}

export default EmployeeList;

