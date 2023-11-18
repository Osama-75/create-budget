import { useState } from "react"
import "./add.css"
import { toast } from "react-toastify";
import { createBudget } from "../helpers"

export default function AddBudget() {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        try {  
            await createBudget({
                name: name ,
                amount: amount,
            })
            toast.success("Budget created!");
            setName("");
            setAmount("");
            window.location.pathname = "/";
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="form-box">
            <h2>
                Create budget
            </h2>
            <form onSubmit={handleSubmit} >
                <div className="grid-xs inbut-box">
                    <label htmlFor="newBudget">Budget Name</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        name="newBudget"
                        id="newBudget"
                        placeholder="e.g., MonthyIncome"
                        required
                    />
                </div>
                <div className="grid-xs inbut-box">
                    <label htmlFor="newBudgetAmo">Amount</label>
                    <input
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        type="number"
                        step="0.01"
                        name="newBudgetAmo"
                        id="newBudget"
                        placeholder="$400"
                        required
                        inputMode="decimal"
                    />
                </div>
                <button type="submit" className="btn btn--dark">
                    <span>Create budget</span>
                </button>
            </form>
        </div>
    )
}