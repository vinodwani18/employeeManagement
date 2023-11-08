import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEmployees } from '../actions';

function Button() {
   const dispatch = useDispatch();
   const params = useSelector((state) => state?.reducers?.queryParams);
      console.log(params);
   // let noofRecords = parseInt(params?.noofRecords) + 10
   let newParams= {
      noofRecords:params?.noofRecords,
      idStarts:parseInt(params?.idStarts) + 10
   }

   return <button onClick={() => dispatch(getEmployees(newParams))}>Next</button>;
}

export default Button;