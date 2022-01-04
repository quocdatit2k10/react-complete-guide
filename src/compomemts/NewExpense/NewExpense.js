import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

function NewExpense(props) {
  const [isCancel, setIsCancel] = useState(true);

  const cancelHandler = () => {
    setIsCancel(true);
  };

  const addNewExpenseHandler = () => {
    setIsCancel(false);
  };

  const saveExpenseDataHander = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {isCancel && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
      {!isCancel && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHander}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
