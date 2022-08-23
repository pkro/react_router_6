import logo from "../assets/red30-tech-logo.png";
import {Link, NavLink} from 'react-router-dom';

function App() {
    const addClassIfActive = ({isActive}) => isActive ? 'nav-active': '';
  return (
      <header className="container">
        <img
          className="logo"
          src={logo}
          alt="Red30 Tech logo"
          title="Red30 Tech | Home"
        />
          <nav>
              <NavLink to={"/"} className={addClassIfActive}>Home</NavLink>
              <NavLink to={"/categories"} className={addClassIfActive}>Categories</NavLink>
              <NavLink to={"/about"} className={addClassIfActive}>About</NavLink>
          </nav>
      </header>
  );
}

export default App;
