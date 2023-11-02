import React from 'react';
import { connect } from 'react-redux'

let EmployeeList = ({ employee }) => (
    employee ?
  <div>
    name
  </div> :
null
);
const mapStateToProps = (state) => ({
article: state.news,
})
EmployeeList = connect(mapStateToProps,null)(EmployeeList)
export default EmployeeList;