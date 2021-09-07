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
import {
  Link,
} from "react-router-dom";
import Title from "./FP_Title.jsx"

import FPStyles from "./FPStyles.js";

const useStyles = makeStyles(FPStyles);

function FinancialPlanning() {
  const classes = useStyles();

  return (
    <div>
      <section className={classes.modules}>


        <Title />
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
                component={Link}
                to="/myplan/financial-planning/college-expenses"
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
