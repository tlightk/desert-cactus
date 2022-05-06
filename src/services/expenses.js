import { ActionCreators } from "../app/expensesReducer";

export const GetExpenses = async (dispatch) => {
  try {
    // api call
    const expenses = [
      { id: 1, description: "Groceries", amount: 3.23 },
      { id: 2, description: "Gas", amount: 21.65 },
      { id: 3, description: "Rent", amount: 150.0 },
    ];

    dispatch(ActionCreators.setExpenses(expenses));
  } catch {
    console.log("Error");
  }
};

export const NewExpense = async (dispatch, expense) => {
  try {
    // api call
    dispatch(
      ActionCreators.NewExpense({
        id: 10,
        description: expense.description,
        amount: expense.amount,
      })
    );
  } catch {
    console.log("Error!");
  }
};
