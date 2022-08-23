import {getCategory} from "../api";
import {NavLink, Outlet, useParams} from "react-router-dom";

export default function Category() {
    const params = useParams();
    const category = getCategory(params.catId);
    const sessions = category.sessions;

  return (
    <>
      <h2>{category.name} Sessions</h2>
        <ul>

            {sessions.map(session=><li key={session.id}><NavLink className={({isActive}) => isActive ? 'session-active': ''} to={session.id}>{session.name}</NavLink></li>)}
        </ul>
        <Outlet />
    </>
  );
}
