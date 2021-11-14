import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import { useState } from "react";

import "./Expenses.css";

const Expenses = (props) => {
  const [userPickedYear, setUserPickedYear] = useState("2020");

  const userPickHandler = (year) => {
    setUserPickedYear(year);
    console.log(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          pickedYear={userPickedYear}
          onPicked={userPickHandler}
        />
        {props.expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
