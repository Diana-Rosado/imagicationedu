import React from "react";
import { IconButton, Tooltip, makeStyles, Avatar } from "@material-ui/core";
import DashboardStyles from "./DashboardStyles.js";
import Home from './Home/homeDashboard.jsx'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import HomeIcon from '@material-ui/icons/HomeOutlined';
import logo from '../Icons/bird.svg';
import Map from '@material-ui/icons/MapOutlined';
import Test from './MyPlan/Modules.jsx';
import SearchIcon from '@material-ui/icons/Search';
import MyPlan from './MyPlan/Blank.jsx'
import Modules from './MyPlan/Modules.jsx';

const useStyles = makeStyles(DashboardStyles);
function Dashboard() {
  const classes = useStyles();
  let { path, url } = useRouteMatch();
  // const routes = [
  //   {
  //     path: "/home",
  //     main: () => <Home />,

  //   },
  //   {
  //     path: "/myplan",
  //     main: () => <MyPlan />,
  //   },
  //   {
  //     path: 'myplan/modules',
  //     main: () => <Modules />
  //   }
  // ];


  return (
    <div style={{ backgroundColor: '#F5F5F5', height: '100vh' }}>

      <section className={classes.header}>
        <form className={classes.form}>
          <input type="search" placeholder="Search for lesson" className={classes.searchField} />
          <IconButton className={classes.searchButton}>
            <SearchIcon fontSize="small" />
          </IconButton>
        </form>
        <div className={classes.user}>
          <IconButton >
            <Avatar fontSize="small" />
          </IconButton>
        </div>
      </section>

      <div style={{ display: 'flex' }}>
        <Router>

          <section className={classes.sidebar}>
            <div className={classes.logo}>
              <img src={logo} alt="Imagication" className={classes.logoBtn} />
            </div>
            <div style={{ display: 'flex' }}>
              <nav className={classes.nav}>
                <IconButton className={classes.navBtn} component={Link} to="/home" style={{ color: "rgb(255,255,255)" }} >
                  <Tooltip title="Home" className={classes.toolTip}>
                    <HomeIcon />
                  </Tooltip>
                </IconButton>
                <IconButton className={classes.navBtn} component={Link} to="/myplan" style={{ color: "rgb(255,255,255)" }}>
                  <Tooltip className={classes.toolTip} title="My Plan" >
                    <Map />
                  </Tooltip>
                </IconButton>
              </nav>
            </div>

          </section>
          <div className={classes.content}>
            <Switch >
              <Route exact path="/home" component={Home} />
              <Route exact path="/myplan" component={MyPlan} />
              <Route path="/myplan/modules" component={Modules} />
              {/* {
                routes.map((route, index) => (
                  <Route
                    key={index}
                    exact path={route.path}
                    children={<route.main />}
                  />
                ))
              } */}

            </Switch>

          </div>
        </Router>
      </div>
    </div >
  );
}

export default Dashboard;
