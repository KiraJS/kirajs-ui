import classes from './Contacts.module.css';
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import {ContactIcon} from "../ContactIcon/ContactIcon";

const Contacts = (props) => {

    return (
        <div className='content'>
            <Typography component="h2" variant="h2" gutterBottom className={classes.title}>
                Contacts
            </Typography>
            <List>
                {props.contacts && props.contacts.map((item, i) => {
                    if (item.link) {
                       return (
                           <ListItem key={i}  className={classes.item}>
                               <ContactIcon name={item.icon}/>
                               <Link href={item.link} className={classes.link}>
                                   {item.name}
                               </Link>
                           </ListItem>
                       )
                    } else {
                        return (
                            <ListItem key={i} className={classes.item}>
                                <ContactIcon name={item.icon}/>
                                <ListItemText primary={item.name} />
                            </ListItem>
                        );
                    }
                })}
            </List>
        </div>
    );
}
export default Contacts;