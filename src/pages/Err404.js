import { Link} from "react-router-dom"
import "./Err404.css"

export default function Err404() {

    return (
        <div className="error">
            <h1>Uh oh! We’ve got a problem.</h1>
            <Link
                to="/"
                className="btn btn--dark"
                >
                <span>Go home</span>
            </Link>
        </div>
    )
} 


