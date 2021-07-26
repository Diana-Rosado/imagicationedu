import HomePage from './components/HomePage/HomePage.jsx';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SignIn from './components/SignIn/SignIn.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/register" component={SignIn} />
          <Route path="/home" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;