import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import MainScreen from "../screens/MainScreen";
import NotesScreen from "../screens/NotesScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import "./components.styles.css"

export const NavBar = (props) => {
    return (
        <BrowserRouter>
            <div>
                <ul class="nav-ul">
                    <li class="nav-li">
                        <Link to="/" class="page-link">
                            About
                        </Link>
                    </li>
                    <li class="nav-li">
                        <Link to="/notes" class="page-link">
                            Notes
                        </Link>
                    </li>
                    <li class="nav-li">
                        <Link to="/projects" class="page-link">
                            Projects
                        </Link>
                    </li>
                </ul>

                <Switch>
                    <Route path="/" exact>
                        <MainScreen/>
                    </Route>
                    <Route path="/notes" exact>
                        <NotesScreen/>
                    </Route>
                    <Route path="/projects" exact>
                        <ProjectsScreen/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}