import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense() {
  const onSaveExpenseDataHandler = (enteredData)=>{
    const expenseData = {
      ...enteredData,
      date : new Date(enteredData.date),
      id : Math.random().toString()
    };
    console.log(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
    </div>
  );
}

export default NewExpense;
