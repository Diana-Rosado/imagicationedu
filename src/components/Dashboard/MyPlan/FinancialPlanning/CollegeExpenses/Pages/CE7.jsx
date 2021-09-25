import React from 'react'
import { makeStyles, styled } from '@material-ui/styles';
import {
    Button,
    Typography,
    Container,
    Grid, Box,
    ButtonBase,
    Card,
    CardActions,
    CardContent,
    CardActionArea,
    CardMedia,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,

} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Car from '../../../../../Icons/svg/Car.svg'
import Train from '../../../../../Icons/svg/Bus.svg'
import Bus from '../../../../../Icons/svg/Train.svg'
const useStyles = makeStyles(theme => ({
    container: {
        marginTop: '10vh'
    },


}))

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function CE3() {
    const classes = useStyles()
    return (
        <div>
            <Container fixed={true} className={classes.container}>
                <Grid>
                    <Typography align="center" variant="h6">
                        If you plan on commuting to your school, knowing how much it will
                        cost you is a great start. Click on each
                    </Typography>
                </Grid>
                <Grid container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    style={{ paddingTop: '20px' }}
                >
                    <Box >
                        <Card sx={{ maxWidth: 350 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={Car}
                                    alt="Car"
                                />
                            </CardActionArea>
                            <CardActions>
                                <Button
                                    size="small"
                                    color="primary"
                                    endIcon={<SearchIcon />}
                                    fullWidth={true}
                                >
                                    Car
                                </Button>
                            </CardActions>

                        </Card>
                    </Box>
                    <Box >
                        <Card sx={{ maxWidth: 350 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={Train}
                                    alt="Car"
                                />
                            </CardActionArea>
                            <CardActions>
                                <Button
                                    size="small"
                                    color="primary"
                                    endIcon={<SearchIcon />}
                                    fullWidth={true}
                                >
                                    Train
                                </Button>
                            </CardActions>

                        </Card>
                    </Box>
                    <Box >
                        <Card sx={{ maxWidth: 400 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={Bus}
                                    alt="Car"
                                />
                            </CardActionArea>
                            <CardActions>
                                <Button
                                    size="small"
                                    color="primary"
                                    endIcon={<SearchIcon />}
                                    fullWidth={true}
                                >
                                    Bus
                                </Button>
                            </CardActions>

                        </Card>
                    </Box>
                </Grid>
            </Container>
        </div >
    )
}
