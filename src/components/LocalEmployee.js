import React, { useEffect, useState } from 'react';

const LocalEmployee = () => {
    const [name, setName] = useState("");
    const [desscription, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [empList, setEmplist] = useState([]);

    useEffect(() => {
        localStorage.setItem("employeeList", JSON.stringify([]));
        setEmplist(JSON.parse(localStorage.getItem("employeeList")));
    }, []);

    const clear = () => {
        setName("");
        setDescription("");
        setDate("");
        setTime("");
    }
    const handleSubmitClick = () =>{
        const existingEmployeesList = JSON.parse(localStorage.getItem("employeeList"));
        const employeeObj = {
            name,
            desscription,
            date,
            time
        };
        existingEmployeesList.push(employeeObj);
       localStorage.setItem("employeeList", JSON.stringify([...existingEmployeesList]));
       setEmplist([...existingEmployeesList]);
       clear();
    };

    const deleteEmployee = (index) => {
        const existingEmployeesList = JSON.parse(localStorage.getItem("employeeList"));
        const updatedEmpList = existingEmployeesList.filter((emp, id) =>  id!==index);
        localStorage.setItem("employeeList", JSON.stringify([...updatedEmpList]));
        setEmplist([...updatedEmpList]);
    }

    return <div>
        <div>Employee form</div>
        <div>
        Name: <input onChange={(e) => setName(e.target.value)} value={name} className='border border-gray-400 px-2'/>
        Description: <input onChange={(e) => setDescription(e.target.value)} value={desscription} className='border border-gray-400 px-2' />
        Date: <input onChange={(e) => setDate(e.target.value)} value={date} type='date' className='border border-gray-400 px-2' />
        Time: <input onChange={(e) => setTime(e.target.value)} value={time} type='time' className='border border-gray-400 px-2'/>

        <button onClick={() => handleSubmitClick()}>Submit</button>
        </div>

        <div className='font-bold'>List of Employee:</div>
        <div className='border border-black shadow-lg'>
            <div className='flex'>
                <div className='font-bold p-2 m-2 w-25 text-center'>Name</div>
                <div className='font-bold p-2 m-2 w-25 text-center'>Description</div>
                <div className='font-bold p-2 m-2 w-25 text-center'>Date</div>
                <div className='font-bold p-2 m-2 w-25 text-center'>Time</div>
            </div>
            {empList.map((emp, index) => {
                return (
                    <div key={index} className='flex'>
                        <div className='p-2 m-2 w-25 text-center'>{emp.name}</div>
                        <div className='p-2 m-2 w-25 text-center'>{emp.desscription}</div>
                        <div className='p-2 m-2 w-25 text-center'>{emp.date}</div>
                        <div className='p-2 m-2 w-25 text-center'>{emp.time}</div>
                        <div className='p-2 m-2 w-25 text-center'><button onClick={() => deleteEmployee(index)}>Delete</button></div>
                    </div>
                );
            })}
        </div>

    </div>
};

export default LocalEmployee;