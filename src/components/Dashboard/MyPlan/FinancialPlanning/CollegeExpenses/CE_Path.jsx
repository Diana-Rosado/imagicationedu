import React, { useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/styles';
import Title from '../FP_Title.jsx'
import PageOne from './Pages/CE1.jsx'
import PageTwo from './Pages/CE2.jsx'
import PageThree from './Pages/CE3.jsx'
import PageFour from './Pages/CE4.jsx'
import PageSeven from './Pages/CE7.jsx'
import { Stepper, StepContent, Button, KeyboardArrowLeft, KeyboardArrowRight, Typography, Box, StepLabel, Step, Grid, StepButton } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

const useStyles = makeStyles(theme => ({

}))

const data = [
    {
        id: '1',
        page: <PageOne />,
        label: 'What will we be doing'
    },
    {
        id: '2',
        page: <PageTwo />,
        label: 'yeurrrrrrrrrrrrrrrrrrrrrr'
    },
    {
        id: '3',
        page: <PageThree />,
        label: 'yeurrrrrrrrrrrrrrrrrrrrrr'
    },
    {
        id: '4',
        page: <PageFour />,
        label: 'yeurrrrrrrrrrrrrrrrrrrrrr'
    },
    {
        id: '7',
        page: <PageSeven />,
        label: 'yeurrrrrrrrrrrrrrrrrrrrrr'
    },
];
const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad', '4', '5'];



function CE_Path() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    // const [activeStep, setActiveStep] = useState(0);

    // const handleNext = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // };

    // const handleBack = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // };
    return (
        <div>

            <Title />
            <Grid style={{ marginLeft: '10vw' }}>
                <Box sx={{ width: '90%' }}>
                    <Stepper nonLinear activeStep={activeStep}>
                        {steps.map((label, index) => (
                            <Step key={label} completed={completed[index]}>
                                <StepButton color="inherit" onClick={handleStep(index)}>
                                    {label}
                                </StepButton>
                            </Step>
                        ))}
                    </Stepper>
                    <div>
                        {allStepsCompleted() ? (
                            <React.Fragment>
                                <Typography sx={{ mt: 2, mb: 1 }}>
                                    All steps completed - you&apos;re finished
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    <Button onClick={handleReset}>Reset</Button>
                                </Box>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <Typography sx={{ mt: 2, mb: 1 }}>{data[activeStep].page}</Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                    <Button
                                        color="inherit"
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        sx={{ mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    <Button onClick={handleNext} sx={{ mr: 1 }}>
                                        Next
                                    </Button>
                                    {activeStep !== steps.length &&
                                        (completed[activeStep] ? (
                                            <Typography variant="caption" sx={{ display: 'inline-block' }}>
                                                Step {activeStep + 1} already completed
                                            </Typography>
                                        ) : (
                                            <Button onClick={handleComplete}>
                                                {completedSteps() === totalSteps() - 1
                                                    ? 'Finish'
                                                    : 'Complete Step'}
                                            </Button>
                                        ))}
                                </Box>
                            </React.Fragment>
                        )}
                    </div>
                    {/* <Grid justifyContent="flex-end" xs={10} alignItems="center" direction="column"
                    style={{ backgroundColor: 'yellow' }}>
                    <Stepper activeStep={activeStep} orientation="horizontal">
                        {data.map((step, index) => (
                            <Step key={step.label}>
                                <StepContent>
                                    <Typography>{step.page}</Typography>
                                    <Box sx={{ flex: '1 1 auto' }}>
                                        <div>
                                            <Button
                                                variant="contained"
                                                onClick={handleNext}
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                {index === data.length - 1 ? 'Finish' : 'Continue'}
                                            </Button>
                                            <Button
                                                disabled={index === 0}
                                                onClick={handleBack}
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                Back
                                            </Button>
                                        </div>
                                    </Box>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === data.length && (
                        <Box square elevation={0} sx={{ p: 3 }}>
                            <Typography>All steps completed - you&apos;re finished</Typography>
                        </Box>
                    )}
                </Grid> */}
                </Box>
            </Grid>
        </div >
    )
}

export default CE_Path;
