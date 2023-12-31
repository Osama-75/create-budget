import ExpenseItem from "./ExpenseItem";


export default function Table(expenses) {
    return (
        <div className="table" >
            <table>
                <thead>
                    <tr>
                        {
                        ["Name", "Amount", "Date", "Budget", ""].map((i, index) => (
                            <th key={index}>{i}</th>
                        ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        expenses.expenses.map((expense) => (
                        <tr key={expense.id}>
                            <ExpenseItem expense={expense} />
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}