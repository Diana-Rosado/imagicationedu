import React from "react";
import {
  makeStyles,
  Button,
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import ModuleStyles from "./moduleStyles.js";
import moduleStack from "../../Icons/moduleStack.svg";

const useStyles = makeStyles(ModuleStyles);
function Modules() {
  const classes = useStyles();
  return (
    <div
    // style={{ backgroundColor: "lightblue" }}
    >
      <section className={classes.modules}>
        <p
          style={{
            fontWeight: "600",
            marginLeft: "155px",
            marginBottom: "-5px",
            color: "#B5B5B5",
          }}
        >
          Module
        </p>

        <div className={classes.title}>
          {" "}
          <img
            src={moduleStack}
            alt="Module"
            style={{ width: "45px", marginLeft: "100px" }}
          />
          <p
            style={{
              fontWeight: "500",
              marginLeft: "10px",
              fontSize: "25px",
              color: "#070707",
            }}
          >
            Financial Planning
          </p>
        </div>
      </section>
      <section className={classes.paths}>
        {/* <p>TEST</p> */}
        <br />
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="flex-start"
        >
          <Card className={classes.path}>
            {/* <CardActionArea> */}
            <CardHeader
              title="College Expenses"
              style={{
                borderBottom: "1px solid lightgrey",
                fontWeight: "bold",
              }}
            />
            <CardContent>
              <Typography variant="body1" color="textSecondary" component="p">
                What are the costs when it comes to college? This path will give
                a brief introduction about college expenses and how to
                potentially save some bucks here and there.
              </Typography>
            </CardContent>
            {/* </CardActionArea> */}
            <CardActions
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Button
                variant="contained"
                size="large"
                color="primary"
                style={{
                  backgroundColor: "#06AD35",
                  borderRadius: "30px",
                  textTransform: "lowercase",
                  textTransform: "capitalize",
                }}
                //component={Link}
                //to="/myplan/modules"
              >
                Begin{" "}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </section>
    </div>
  );
}

export default Modules;
