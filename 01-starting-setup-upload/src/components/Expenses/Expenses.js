import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import { useState } from "react";

import "./Expenses.css";

const Expenses = (props) => {
  const [userPickedYear, setUserPickedYear] = useState("2020");

  const filteredExpenseItems = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === userPickedYear
  );

  const userPickHandler = (year) => {
    setUserPickedYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          pickedYear={userPickedYear}
          onPicked={userPickHandler}
        />
        {filteredExpenseItems.length === 0 ? (
          <p>No content was found.</p>
        ) : (
          filteredExpenseItems.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
      </Card>
    </div>
  );
};

export default Expenses;
