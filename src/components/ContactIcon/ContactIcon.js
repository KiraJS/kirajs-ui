import Avatar from "@material-ui/core/Avatar";
import classes from "../Contacts/Contacts.module.css";
import ListItem from "@material-ui/core/ListItem";
import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";

export const ContactIcon = (props) => {

    const iconMap = {
        'home': <HomeIcon />,
        'phone': <PhoneIphoneIcon />,
        'mail': <MailIcon />,
        'linkedIn': <LinkedInIcon />,
        'github': <GitHubIcon />,
        'facebook': <FacebookIcon />,
    }
    return (
        <Avatar className={classes.img}>
            { iconMap[props.name] }
        </Avatar>
    )
}