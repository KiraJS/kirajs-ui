import React, {useState} from 'react';
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip"
import Divider from "@material-ui/core/Divider"
import classes from "../Contacts/Contacts.module.css";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";

export const Experience = (props) => {

    let [activeStepState, changeActiveStep] = useState(0)

    const handleNext = () => {
        changeActiveStep(activeStepState + 1 );
    };

    const handleBack = () => {
        changeActiveStep(activeStepState - 1 );
    };

    const handleReset = () => {
        changeActiveStep(0);
    };

    const steps = props.experienceItems.map((item)=> item.role);

    return (
        <div className='content'>
            <Typography component="h2" variant="h2" gutterBottom className={classes.title}>
                Experience
            </Typography>
            <Stepper activeStep={activeStepState} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            <Typography component="h4" variant="h4" gutterBottom>
                                {props.experienceItems[index].role}
                            </Typography>
                            <Typography component="h5" variant="h5" gutterBottom>
                                {props.experienceItems[index].company}
                            </Typography>
                            <Typography component="h6" variant="h6" gutterBottom color="textSecondary">
                                {props.experienceItems[index].from} – {props.experienceItems[index].to}
                            </Typography>
                            <Typography component="h6" variant="body1" gutterBottom>
                                {props.experienceItems[index].description}
                            </Typography>
                            <br/>
                            <div>
                                {props.experienceItems[index].skills.map((skill, i) => (
                                    <Chip key={i} className={classes.chip} variant="outlined" color="secondary" label={skill} />
                                ))}
                            </div>
                            <br/>
                            <Divider light />
                            <br/>
                            <div>
                                <div>
                                    <Button
                                        disabled={activeStepState === 0}
                                        onClick={handleBack}>
                                        Back
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={ activeStepState === props.experienceItems.length - 1 ? handleReset : handleNext}>
                                        {activeStepState === props.experienceItems.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
}

export default Experience;