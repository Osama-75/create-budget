import { useParams } from "react-router-dom";
import { getAllMatchingItems } from "../helpers";
import Nav from "../components/Nav";
import BudgetItem from "../components/BudgetItem";
import Table from "../components/Table";
import "./Home.css";

export default  function BudgetPage() {
    const { id } = useParams();

    const budget = getAllMatchingItems({
        category: "budgets",
        key: "id",
        value: id,
    })[0];

    const expenses = getAllMatchingItems({
        category: "expenses",
        key: "budgetId",
        value: id,
    });

    return (
        <>
            <Nav />
            <div
                className="grid-lg budpage"
                style={{
                    "--accent": budget.color,
                }}
            >
                <h1>
                    <span className="accent">{budget.name}</span> Overview
                </h1>
                <div className="flex-lg">
                    <BudgetItem budget={budget} />
                    {/* <AddExpense budgets={[ budget ]} /> */}
                </div>
                {expenses && expenses.length > 0 && (
                    <div className="grid-md">
                        <h2>
                            <span className="accent">{budget.name}</span> Expenses
                        </h2>
                        <Table expenses={expenses}  />
                    </div>
                )}
            </div>
        </>
    )
}