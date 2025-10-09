import { Link } from "react-router-dom";

export default function NotFoundPage(){
    return(
        <div>
            This page is Not Found. Please go to the <Link to='/'>main page</Link>
        </div>
    )
}