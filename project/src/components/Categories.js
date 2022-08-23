import {getCategories} from "../api";
import {Link, NavLink, Outlet} from "react-router-dom";

export default function Categories() {
    const categories = getCategories();

    return (
        <div className="container">
            <h1>Session Categories</h1>
            <ul className={"categories"}>
                {
                    categories.map(cat => <li key={cat.id}>
                        <NavLink to={cat.id}
                                 className={({isActive}) => isActive ? 'category-active' : ''}>{cat.name} </NavLink>
                    </li>)
                }
            </ul>
            <Outlet/>
        </div>
    );
}
