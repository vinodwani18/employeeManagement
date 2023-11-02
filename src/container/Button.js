import React from 'react';
import { connect } from 'react-redux';
import { getEmployees } from '../actions';
let Button=({getEmployees})=>(
   <button onClick={getEmployees}>Press to see news</button>
)
const mapDispatchToProps = {
     getEmployees: getEmployees,
};
Button = connect(null,mapDispatchToProps)(Button);
export default Button;