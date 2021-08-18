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

import FPStyles from "./FPStyles.js";
import moduleStack from "../../../Icons/moduleStack.svg";

const useStyles = makeStyles(FPStyles);
function FinancialPlanning() {
  const classes = useStyles();
  return (
    <div>
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
              fontSize: "18px",
              color: "#070707",
            }}
          >
            Financial Planning
          </p>
        </div>
      </section>
      <section className={classes.paths}>
        <br />
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="flex-start"
        >
          <Card className={classes.path}>
            <CardHeader
              title="College Expenses"
              className={classes.cardheader}
            />
            <CardContent>
              <Typography variant="body1" color="textSecondary" component="p">
                What are the costs when it comes to college? This path will give
                a brief introduction about college expenses and how to
                potentially save some bucks here and there.
              </Typography>
            </CardContent>
            <CardActions className={classes.cardactions}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                className={classes.actionbutton}
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

export default FinancialPlanning;
