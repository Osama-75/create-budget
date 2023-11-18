import { Link } from "react-router-dom"
import { deleteItem, fetchData, formatCurrency, formatDateToLocaleString } from "../helpers"
import { toast } from "react-toastify";


export default function ExpenseItem({ expense }) {
    const data = fetchData("budgets");
    const budget = data.filter((item) => item.id === expense.budgetId);

    const  delIt = async () => {
        try {
            await deleteItem({
                key: "expenses",
                id: expense.id,
            });
            toast.success("Expense deleted!");
            window.location.pathname = "/";
        } catch (e) {
            throw new Error("There was a problem deleting your expense.");
        }
    }
    return(
        <>
            <td>{expense.name}</td>
            <td>{formatCurrency(expense.amount)}</td>
            <td>{formatDateToLocaleString(expense.createdAt)}</td>
            <td>
                <Link
                    to={`/budget/${budget[0]?.id}`}
                    style={{
                        "--accent": budget[0]?.color,
                    }}
                    >
                    {budget[0]?.name}
                </Link>
            </td>
            <td>
            <button
                className="del-btn"
                onClick={delIt}
            >
                del
            </button>
            </td>
        </>
    )
}