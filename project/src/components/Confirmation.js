import {useLocation} from "react-router-dom";
import {Location} from "history";

export default function Confirmation() {
    const {state} = useLocation();
    return (
        <div className="container">
            <h1>Thank You, {state && state.name}!</h1>
            <p>You're now registered with {state && state.email} for Red30 Tech.</p>
        </div>
    );
}

