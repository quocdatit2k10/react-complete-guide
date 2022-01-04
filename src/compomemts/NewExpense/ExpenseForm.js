import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //   const [userInput, setUserInput] = {
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   };

  const titleChangeHander = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...setUserInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((preState) => {
    //     return {...preState, enteredTitle: event.target.value};
    // })
  };
  const amountChangeHander = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...setUserInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const dateChangeHander = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...setUserInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHander = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHander}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHander}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHander}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHander}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
