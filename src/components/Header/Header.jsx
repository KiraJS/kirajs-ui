import React from "react";
import classes from './Header.module.css';
import Typography from "@material-ui/core/Typography";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <Typography component="h1" variant="h1" gutterBottom className={classes.title}>
                {props.user && props.user.name}
            </Typography>
            <Typography component="h2" variant="h2" className={classes.title}>
                {props.user && props.user.role}
            </Typography>
        </header>
    );
}

export default Header;
