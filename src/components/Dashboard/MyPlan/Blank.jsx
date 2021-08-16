import React from "react";
import blankStyles from "./blankStyles.js";
import {
  makeStyles,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
} from "@material-ui/core";
import Clipboard from '../../Icons/svg/Clipboard.svg'
import Grid from '@material-ui/core/Grid';
import block from '../../Icons/svg/block3.svg'


const useStyles = makeStyles(blankStyles);
function Blank() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Grid direction="row" spacing={3} style={{ display: 'flex', alignItems: 'center', padding: '10px', width: '300px' }}>
        <img alt="block" src={block} />
        <Typography variant="body1" align="right" style={{ marginLeft: '20px' }}>
          Learning Modules
        </Typography>
      </Grid>
      <br></br>
      <Card style={{ height: "100%", width: "250px" }} className={classes.fin}>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
            //   component="h2"
            //   style={{ color: "white" }}
            >
              0% Completion
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <img src={Clipboard} alt={"background"}></img>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="medium" style={{ color: "white" }} fullWidth={true}>
            Financial Planning
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Blank;
