import React, {useContext} from 'react';
import './Employee.css';

import {EmployeeContext} from '../context/employeeContext';

const Employee = ({data}) => {
	const {updateEmployeeList} = useContext(EmployeeContext);

	const removeEmployee = (id) => {
		console.log('inside removeEmployee.removeEmployee(): ', id);
		updateEmployeeList({type: 'DELETE_EMPLOYEE', id});
	};

	return (
		<div className="employee">
			<h1>
				{data.name}
				<button onClick={() => removeEmployee(data.id)}>X</button>
			</h1>
			<p>{data.address}</p>
		</div>
	);
};

export default Employee;
