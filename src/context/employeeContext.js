import React, {createContext, useReducer} from 'react';
import {reducer} from '../context/reducer';

export const EmployeeContext = createContext();

// * children = react elements that need to consume the context, see App.js
const EmployeeProvider = ({children}) => {
	console.log('children: ', children);

	// ? 'dispatch' might be the standard name instead of using custom (ie. updateEmployeeList)
	const [employees, updateEmployeeList] = useReducer(
		reducer, // * calling our reducer function

		// * dummy initial data
		[
			{id: 1, name: 'Marvin', address: 'Manila'},
			{id: 2, name: 'Nata', address: 'World'}
		]
	);
	console.log('inside EmployeeProvider, employees data: ', employees);

	return <EmployeeContext.Provider value={{employees, updateEmployeeList}}>{children}</EmployeeContext.Provider>;
};

export default EmployeeProvider;
