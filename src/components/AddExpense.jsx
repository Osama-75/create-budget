import { useState } from "react";
import "./add.css";
import { toast } from "react-toastify";
import { createExpense } from "../helpers";

export default function AddExpense(budgets) {

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [budgetId, setBudgetId] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        try {  
            await createExpense({
                name: name ,
                amount: amount,
                budgetId:budgetId
            })
            toast.success("Expense created!");
            setName("");
            setAmount("");
            window.location.pathname = "/";
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="form-box">
            <h2>Add New{" "}
                <span className="accent">
                {budgets.length === 1 && `${budgets.map((budg) => budg.name)}`}
                </span>{" "}
                Expense
            </h2>
            <form onSubmit={handleSubmit} >
                <div className="expense-inputs inbut-box">
                    <div className="grid-xs">
                        <label htmlFor="newExpense">Expense Name</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            name="newExpense"
                            id="newExpense"
                            placeholder="e.g., Coffee"
                            required
                        />
                    </div>
                    <div className="grid-xs">
                        <label htmlFor="newExpenseAmount">Amount</label>
                        <input
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            type="number"
                            step="0.01"
                            inputMode="decimal"
                            name="newExpenseAmount"
                            id="newExpenseAmount"
                            placeholder="e.g., 3.50"
                            required
                        />
                    </div>
                </div>
                <div className="grid-xs inbut-box" hidden={budgets.length === 1}>
                        <label htmlFor="newExpenseBudget">Budget Category</label>
                        <select 
                            value={budgetId} onChange={(e) => setBudgetId(e.target.value)} 
                            name="newExpenseBudget" id="newExpenseBudget" required>
                            {
                                budgets.budgets
                                .map((budget) => (
                                    <option key={budget.id} value={budget.id}>
                                        {budget.name}
                                    </option>
                                ))
                            }
                        </select>
                </div>
                <button type="submit" className="btn btn--dark">
                    <span>Create Expense</span>
                </button>
            </form>
        </div>
    )
}