import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });
  function inputChangeHandler(identifier, value) {
    if (identifier === "title") {
      setUserInput((prevState) => {
        return { ...prevState, title: value };
      });
    } else if (identifier === "amount") {
      setUserInput((prevState) => {
        return { ...prevState, amount: value };
      });
    } else if (identifier === "date") {
      setUserInput((prevState) => {
        return { ...prevState, date: value };
      });
    }
  }
  const submitHandler = (event)=>{
    event.preventDefault();
    props.onSaveExpenseData(userInput);
    setUserInput({
      title: "",
      amount: "",
      date: "",
    })
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number" min='1'
            value={userInput.amount}
            onChange={(event) =>
              inputChangeHandler("amount", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={userInput.date}
            onChange={(event) => inputChangeHandler("date", event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
      <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
