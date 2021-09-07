import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import Budget from '../../../../../Icons/svg/budget.svg'

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


export default function CE1() {
    const classes = useStyles()
    return (
        <div>
            <Container fixed={true} className={classes.container}>
                <Grid container spacing={2} className={classes.grid}>
                    <Grid item>
                        <img alt="Budgeting" src={Budget} />
                        <Grid className={classes.text}>
                            <Typography variant="h5" gutterBottom >
                                <strong> Let's talk money </strong>
                            </Typography>
                            <Typography variant="body1" color="textSecondary" align="left">
                                Understanding how to financially plan is an important life skill. Financially planning helps to determine short and long term financial goals to create a balanced plan .
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
