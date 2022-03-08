import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    hideInputFormHandler();
  };

  const [displayInput, setDisplayInput] = useState(false);

  const hideInputFormHandler = () => {
    setDisplayInput(false);
  };

  const showFormDisplayHandler = () => {
    setDisplayInput(true);
  };

  return (
    <div className="new-expense">
        {!displayInput && <button onClick={showFormDisplayHandler}>Add New Expense</button>}
        {displayInput && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideInputFormHandler}/> }
    </div>
  );
};

export default NewExpense;
