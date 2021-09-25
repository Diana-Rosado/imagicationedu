import HomePage from './components/HomePage/HomePage.jsx';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SignIn from './components/SignIn/SignIn.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import FinancialPlanning from './components/Dashboard/MyPlan/FinancialPlanning/FinancialPlanning.jsx';
import CollegeExpenses from './components/Dashboard/MyPlan/FinancialPlanning/CollegeExpenses/CE_Path.jsx'
import MyPlan from './components/Dashboard/MyPlan/Blank.jsx'

function App() {
  return (

    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        {/* <Route path="/home" component={Dashboard} /> */}
        {/* <Route exact path="/myplan" component={MyPlan} />
        <Route path="/myplan/financial-planning/:topicId" component={CollegeExpenses} />
        <Route path="/myplan/:topicId" component={FinancialPlanning} /> */}
        {/* <Route path="/register" component={SignIn} /> */}
        <Route path="/home">
          <Dashboard />
        </Route>
        <Route exact path="/myplan" >
          <Dashboard />
          <MyPlan />
        </Route>
        <Route exact path="/myplan/:topicId" >
          <Dashboard />
          <FinancialPlanning />
        </Route>
        <Route exact path="/myplan/financial-planning/college-expenses" >
          <Dashboard />
          <CollegeExpenses />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;