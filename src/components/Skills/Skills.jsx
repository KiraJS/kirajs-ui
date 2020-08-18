import React from 'react';
import Typography from "@material-ui/core/Typography";
import classes from "../Skills/Skills.module.css";
import Chip from "@material-ui/core/Chip";

const Skills = (props) => {

    return (
        <div className="content">
            <Typography component="h2" variant="h2" gutterBottom className={classes.title}>
                Skills
            </Typography>
            <div>
                {props.skills.map((skill, i) => (
                    <Chip key={i} className={classes.chip} variant="outlined" color="secondary" label={skill} />
                ))}
            </div>
        </div>
    );
}

export default Skills;