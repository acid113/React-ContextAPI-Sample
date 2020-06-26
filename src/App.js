import React from 'react';

import EmployeeProvider from './context/employeeContext';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';

import './App.css';

const App = () => {
	return (
		<div>
			{/* nested providers should work but it may be better to  separate them and wrap components that need them */}
			<EmployeeProvider>
				{/* wrap components that need to cosume the context */}
				<AddEmployee />
				<EmployeeList />
			</EmployeeProvider>
		</div>
	);
};

export default App;
