import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isFormShown, setIsFormShown] = useState(false);

  const saveExpenseDataHandler = (expenseData) => {
    props.onAddNewExpense(expenseData);
    hideForm();
  };

  const showForm = () => {
    setIsFormShown(true);
  }

  const hideForm = () => {
    setIsFormShown(false);
  }

  return (
    <div className="new-expense">
      {isFormShown === true ? (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelSubmitForm={hideForm} />
      ) : (
        <button className="expense__actions" onClick={showForm}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
