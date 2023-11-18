import AddBudget from "../components/AddBudget";
import Nav from "../components/Nav";
import "./Home.css";
import { fetchData } from "../helpers"
import AddExpense from "../components/AddExpense";
import BudgetItem from "../components/BudgetItem";
import Table from "../components/Table";



export default function Home() {
    const budgets = fetchData("budgets");
    const expenses = fetchData("expenses");
    return (
        <div >
            <Nav />
            <div className="home">
                <h1>Welcome</h1>
                <div className="grid-sm">
                    {budgets && budgets.length > 0
                            ? (
                            <div className="grid-lg">
                                <div className="flex-lg">
                                <AddBudget/>
                                <AddExpense budgets={budgets} />
                                </div>
                                <h2>Existing Budgets</h2>
                                <div className="budgets">
                                    {
                                        budgets.map((budget) => (
                                            <BudgetItem key={budget.id} budget={budget} />
                                        ))
                                    }
                                </div>
                                {
                                    expenses && expenses.length > 0 && (
                                        <div className="grid-md">
                                            <h2>Recent Expenses</h2>
                                            <Table expenses={expenses} />
                                        </div>
                                    )
                                }
                            </div>
                            )
                            : (
                            <div className="grid-sm">
                                <p>Personal budgeting is the secret to financial freedom.</p>
                                <p>Create a budget to get started!</p>
                                <AddBudget />
                            </div>
                            )
                    }
                </div>
            </div>
        </div>
    )
}