import { calculateSpentByBudget, deleteItem, formatCurrency, formatPercentage, getAllMatchingItems } from "../helpers";
import "./budget.css";

export default function BudgetItem(budget) {
    const { id, name, amount, color } = budget.budget;
    const spent = calculateSpentByBudget(id);

    function delBud() {
        deleteItem({
            key: "budgets",
            id: id,
        });
        const associatedExpenses = getAllMatchingItems({
            category: "expenses",
            key: "budgetId",
            value: id,
        });
        associatedExpenses.forEach((expense) => {
            deleteItem({
                key: "expenses",
                id: expense.id,
            });
        });
        window.location.pathname = "/";
    }
    return (
        <div
            className="budget"
            style={{
                "--accent": color
            }}
        >
            <div className="progress-text">
                <h3>{name}</h3>
                <p>{formatCurrency(amount)} Budgeted</p>
            </div>
            <progress max={amount} value={spent}>
                {formatPercentage(spent / amount)}
            </progress>
            <div className="progress-text">
                <small>{formatCurrency(spent)} spent</small>
                <small>{formatCurrency(amount - spent)} remaining</small>
            </div>
            <div style={{textAlign:"center"}}>
            <button className="del-btn" onClick={delBud}>Delete Budget</button>
            </div>
        </div>
    )
}