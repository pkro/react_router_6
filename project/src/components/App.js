import logo from "../assets/red30-tech-logo.png";
import {Routes, Route, Link} from 'react-router-dom';
import Home from "./Home";
import Categories from "./Categories";
import Category from "./Category";
import About from "./About";
import Header from "./Header";
import Session from "./Session";
import Register from "./Register";
import Confirmation from "./Confirmation";

function App() {
    return (
        <div className="app">
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home title={"yay home"}/>}/>
                <Route path={"/categories"} element={<Categories/>}>
                    <Route path={":catId"} element={<Category/>}>
                        <Route path={":sessionId"} element={<Session/>}/>
                    </Route>
                    <Route index element={<h3>Select a category from above</h3>} />
                </Route>
                <Route path={"/category"} element={<Category/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/register"} element={<Register/>}/>
                <Route path={"/confirmed"} element={<Confirmation/>}/>
                <Route path={"/hello"} element={<h1>Hello from the router</h1>}/>
                <Route path={"*"} element={<h1 className={"not-found"}>404 Not found</h1>}/>
            </Routes>
            <footer className="container">
                &copy;2022 | <a href="https://red30tech.com/">Red30 Tech</a>
            </footer>
        </div>
    );
}

export default App;
