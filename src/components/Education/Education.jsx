import classes from './Education.module.css';
import React from 'react';
import Typography from "@material-ui/core/Typography";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from '@material-ui/icons/School';


const Education = (props) => {
    return (
        <div className="content">
            <Typography component="h2" variant="h2" gutterBottom className={classes.title}>
                Education
            </Typography>
            {props.education && props.education.map((item, index) => (
                <div key={index}>
                    <ListItem>
                        <SchoolIcon color="primary" className={classes.icon} />
                        <Typography className={classes.text}  component="h6" variant="h6">
                            {item.company}
                        </Typography>
                        <Typography component="h6" variant="h6" color="textSecondary">
                            {item.from} – {item.to}
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography component="h6" variant="h6">
                            {item.name}
                        </Typography>
                        <Typography component="h6" variant="h6">
                            {item.description}
                        </Typography>
                    </ListItem>
                    <br/>
                    {props.education && props.education.length - 1 !== index && <Divider light />}
                    <br/>
                </div>
            ))}
        </div>
    );
}

export default Education;