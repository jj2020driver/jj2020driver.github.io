import { Switch, Route } from "react-router-dom";
import './App.scss';
import Home from "./pages/Home";

function App() {
    return (
        <div id="app">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
