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

  let displayExpenseForm = <button onClick={showFormDisplayHandler}>Add New Expense</button>

  if (displayInput === true) {
      displayExpenseForm = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideInputFormHandler}/>
  }

  return (
    <div className="new-expense">
        {displayExpenseForm}
    </div>
  );
};

export default NewExpense;
