import { ActionCreators } from "../app/expensesReducer";

export const GetExpenses = async (dispatch) => {
    try {
        // api call
        const expenses = [
            {id: 1, description: 'Groceries', amount: 3.23},
            {id: 2, description: 'Gas', amount: 21.65},
            {id: 3, description: 'Rent', amount: 150.00},
        ];

        dispatch(ActionCreators.setExpenses(expenses));
    } catch {
        console.log('Error')
    }
}