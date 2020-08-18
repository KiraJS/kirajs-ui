import React from 'react';
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip"
import Divider from "@material-ui/core/Divider"
import classes from "../Contacts/Contacts.module.css";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";

class Experience extends React.Component {

    state = {
        activeStep: 0
    };

    handleNext = () => {
        this.setState({ activeStep: this.state.activeStep + 1 })
    };

    handleBack = () => {
        this.setState({ activeStep: this.state.activeStep - 1 })
    };

    handleReset = () => {
        this.setState({ activeStep: 0 })
    };

    steps = this.props.experienceItems.map((item)=> item.role);

    render() {

        return (
            <div className='content'>
                <Typography component="h2" variant="h2" gutterBottom className={classes.title}>
                    Experience
                </Typography>
                <Stepper activeStep={this.state.activeStep} orientation="vertical">
                    {this.steps.map((label, index) => (
                        <Step key={index}>
                            <StepLabel>{label}</StepLabel>
                            <StepContent>
                                <Typography component="h4" variant="h4" gutterBottom>
                                    {this.props.experienceItems[index].role}
                                </Typography>
                                <Typography component="h5" variant="h5" gutterBottom>
                                    {this.props.experienceItems[index].company}
                                </Typography>
                                <Typography component="h6" variant="h6" gutterBottom color="textSecondary">
                                    {this.props.experienceItems[index].from} – {this.props.experienceItems[index].to}
                                </Typography>
                                <Typography component="h6" variant="body1" gutterBottom>
                                    {this.props.experienceItems[index].description}
                                </Typography>
                                <br/>
                                <div>
                                    {this.props.experienceItems[index].skills.map((skill, i) => (
                                        <Chip key={i} className={classes.chip} variant="outlined" color="secondary" label={skill} />
                                    ))}
                                </div>
                                <br/>
                                <Divider light />
                                <br/>
                                <div>
                                    <div>
                                        <Button
                                            disabled={this.state.activeStep === 0}
                                            onClick={this.handleBack}>
                                            Back
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={ this.state.activeStep === this.props.experienceItems.length - 1 ? this.handleReset : this.handleNext}>
                                            {this.state.activeStep === this.steps.length - 1 ? 'Finish' : 'Next'}
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
}

export default Experience;