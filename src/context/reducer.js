export const reducer = (state, action) => {
	console.log(`inside reducer, heared action: ${action.type}`);
	console.log('current "state" value:', state);
	switch (action.type) {
		case 'ADD_EMPLOYEE':
			// ? 'employee' data object is passed
			console.log(`adding new employee: ${action.employee.name}`);
			return [
				...state,
				{
					id: Math.random(),
					name: action.employee.name,
					address: action.employee.address
				}
			];

		case 'EDIT_EMPLOYEE':
			break;

		case 'DELETE_EMPLOYEE':
			console.log(`removing employee with id: ${action.id}`);
			return state.filter((employee) => employee.id !== action.id);

		default:
			return state;
	}
};
