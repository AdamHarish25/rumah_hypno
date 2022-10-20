import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Contents/Home';
import HomeID from './Contents/HomeID';

function App() {
  return (
    <div id="App" className={`w-screen`}>
      <Switch>
        {window.location.pathname === "/" ? <Redirect to="/en" /> : ""}
        <Route path='/id' component={HomeID} />
        <Route path='/en' exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
