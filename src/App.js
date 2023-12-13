import React from "react";
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './App.css';

function App() {
  // const getEmployeeListComp = useMemo(() => (
  //   <EmployeeList handlePrevClick={handlePrevClick} />
  // ), [filteredList, handlePrevClick]);
  // const buttonComp = useMemo(() => <Button />, []);

  return (
    <div>
        <Header />
        <Outlet />
    </div>
  );
}

export default App;
