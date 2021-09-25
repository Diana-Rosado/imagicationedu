import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Container, Grid } from '@material-ui/core';
import Budget from '../../../../../Icons/svg/budget.svg'
import { Card, Button, Typography, CardActionArea, CardContent, CardActions, CardMedia } from '@mui/material';
import SchoolGirl from '../../../../../Icons/svg/SchoolGirl.svg'

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: '10vh'
    },

    grid: {
        textAlign: 'center'
    },
    text: {
        marginTop: '20px'
    },
}))


export default function CE3() {
    const classes = useStyles()
    return (
        <div>
            <Container fixed={true} className={classes.container}>
                <Grid direction="row" style={{ display: 'flex', justifyContent: "center" }} alignItems="center">
                    <Grid item>
                        <img alt="School girl carrying lots of textbooks" src={SchoolGirl} width="250" />
                    </Grid>
                    <Grid item>
                        <Card sx={{ maxWidth: 400 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Imagine this:
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    You are a high school senior interested in applying to colleges.
                                    You are unsure of the costs associated with colleges.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
