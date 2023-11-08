import React from "react";
import '../css/EmployeeList.css';

function EmployeeList({ employeeList, handlePrevClick }) {
  return (
    employeeList.length > 0 ? ( // Check if the employeeList has elements
      <>
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
          {employeeList.map((employee) => (
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
        <button onClick={() => handlePrevClick()}>Previous</button>
      </>
    ) : null
  );
}

export default EmployeeList;

