import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date("2022-01-10"),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date() },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date("2021-12-19"),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date("2021-12-20"),
  },
];

function App() {

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
    
    // setExpenses(prevExpenses => {
    //   console.log(...prevExpenses);
    //   return [expense, ...prevExpenses];
    //   });    
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
