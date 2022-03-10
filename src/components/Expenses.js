import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpenseFilter/ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [reqYear, setReqYear] = useState("2022");

  const selectedYear = (year) => {
    console.log(year);
    setReqYear(year);
  };

  const filteredExpenses = props.items.filter(
    (expense) => (expense.date.getFullYear().toString() === reqYear)
  );

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter select={reqYear} onSelectedYear={selectedYear} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
