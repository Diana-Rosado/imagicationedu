import React from "react";
import { IconButton, Tooltip, makeStyles, Avatar } from "@material-ui/core";
import DashboardStyles from "./DashboardStyles.js";
import Home from "../Dashboard/Home/homeDashboard.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/HomeOutlined';
import logo from '../Icons/bird.svg';
import Map from '@material-ui/icons/MapOutlined';
import Test from './MyPlan/Modules.jsx';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(DashboardStyles);
function Dashboard() {
  const classes = useStyles();

  const routes = [
    {
      path: "/home",
      main: () => <Home />,
    },
    {
      path: "/myplan",

      main: () => <Test />,
    },
  ];

  return (
    <div style={{ backgroundColor: '#F5F5F5', height: '100vh' }}>
      <div className={classes.container}>
        <div>
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
        </div>

        <section className={classes.sidebar}>
          <div className={classes.logo}>
            <img src={logo} alt="Imagication" className={classes.logoBtn} />

          </div>
          <Router>
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
              <div style={{ flex: 1 }}>
                <Switch>
                  {routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      children={<route.main />}
                    />
                  ))}
                </Switch>
              </div>
            </div>
          </Router>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
