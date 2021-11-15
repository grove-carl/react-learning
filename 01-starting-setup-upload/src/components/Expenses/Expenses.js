import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

import { useState } from "react";

import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

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
      <li>
        <Card className="expenses">
          <ExpensesFilter
            pickedYear={userPickedYear}
            onPicked={userPickHandler}
          />
          <ExpensesChart expenses={filteredExpenseItems} />
          <ExpensesList filteredExpenseItems={filteredExpenseItems} />
        </Card>
      </li>
    </div>
  );
};

export default Expenses;
