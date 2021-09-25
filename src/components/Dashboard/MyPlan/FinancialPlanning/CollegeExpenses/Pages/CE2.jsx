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


export default function CE2() {
    const classes = useStyles()
    return (
        <div>
            <Container fixed={true} className={classes.container}>
                <Grid container spacing={2} className={classes.grid} >
                    <Grid item>
                        <img alt="Budgeting" src={Budget} />
                        <Grid className={classes.text}>
                            <Typography variant="h5" gutterBottom >
                                <strong> Let's talk money </strong>
                            </Typography>
                            <Typography variant="body1" color="textSecondary" align="middle">
                                In this module, you will be getting a deeper understanding of college expenses. We'll be
                                using the colleges of your choosing to get a more personal experience for you. If you're
                                not sure which colleges you want to attend, just click the Random button and we'll choose a few for you!

                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
