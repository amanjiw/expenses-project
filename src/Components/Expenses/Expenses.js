
import React, { useState } from 'react';
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css"
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {
    const { items } = props;
    const [filteredYear, setFilteredYear] = useState("2020")

    const filteredExpenses = props.items.filter(item => item.date.getFullYear().toString() === filteredYear);

    const filteredChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filteredChangeHandler} />
            <ExpenseChart expenses={filteredExpenses} />
            <ExpenseList filteredExpenses={filteredExpenses} />
            
        </Card>
    );
}

export default Expenses;