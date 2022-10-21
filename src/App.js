import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Contents/Home";

function App() {
  return (
    <div id="App" className={`w-screen`}>
      <Switch>
        {window.location.pathname === "/" ? <Redirect to="/en" /> : ""}
        <Route path="/id" render={() => <Home language="id" />} />
        <Route path="/en" exact render={() => <Home language="en" />} />
      </Switch>
    </div>
  );
}

export default App;
