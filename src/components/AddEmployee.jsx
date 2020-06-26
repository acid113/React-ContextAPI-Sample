import React, {useState, useContext} from 'react';
import './AddEmployee.css';

import {EmployeeContext} from '../context/employeeContext';

const AddEmployee = () => {
	// ? updateEmployeeList() must match name used in employeeContext.js in useReducer()
	const {updateEmployeeList} = useContext(EmployeeContext);
	const [employee, setEmployee] = useState();

	const addNewEmployee = (e) => {
		e.preventDefault();
		console.log('inside AddEmployee.addNewEmployee()', employee);

		// ? employee data will be read by reducer.js (used in employeeContext.js)
		updateEmployeeList({type: 'ADD_EMPLOYEE', employee});
	};

	const handleEmployeeData = (e) => {
		console.log('inside AddEmployee.handleEmployeeData()');
		console.log(`id: ${e.target.id}, value: ${e.target.value}`);
		setEmployee({...employee, [e.target.id]: e.target.value});
	};

	return (
		<>
			<form onSubmit={addNewEmployee} className="add-employee">
				<input type="text" id="name" placeholder="name" onBlur={handleEmployeeData} />
				<input type="text" id="address" placeholder="address" onBlur={handleEmployeeData} />
				<button>Add Employee</button>
			</form>
		</>
	);
};

export default AddEmployee;
