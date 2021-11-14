import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const saveExpenseDataHandler = (expenseData) => {
    props.onAddNewExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
