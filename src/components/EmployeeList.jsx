import React, {useContext} from 'react';
import {EmployeeContext} from '../context/employeeContext';
import Employee from '../components/Employee';

const EmployeeList = () => {
	const {employees} = useContext(EmployeeContext);

	console.log('inside EmployeeList > current employee list:', employees);

	return (
		<>
			{employees.map((employee) => (
				<Employee key={employee.id} data={employee} />
			))}
		</>
	);
};

export default EmployeeList;
