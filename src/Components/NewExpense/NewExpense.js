import React, { useState } from 'react';
import NewExpenseForm from './NewExpenseForm';
import "./NewExpense.css";
const NewExpense = (props) => {
    const [newExpense, setNewExpense] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {

        const expenseData = {
            ...enteredExpenseData,
            id: Math.random(),
        }
        props.onAddExpense(expenseData)
    }


    const onCancel = () => {
        setNewExpense(false)
    }

    const onAddNewExpense = () => {
        setNewExpense(true)
    }


    return (
        <div className="new-expense" >
            {newExpense ? <NewExpenseForm onCancel={onCancel} onSaveExpenseData={saveExpenseDataHandler} /> : <button onClick={onAddNewExpense}>Add New Expense</button>}
        </div>);
}

export default NewExpense;