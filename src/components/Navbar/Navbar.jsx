import React from "react";
import classes from './Navbar.module.css';
import Avatar from "../Avatar/Avatar";
import {MenuItem, MenuList} from "@material-ui/core"
import {NavLink} from "react-router-dom";

const menuItems = [
    {
        link: '/contacts',
        name: 'Contacts',
    },
    {
        link: '/experience',
        name: 'Experience'
    },
    {
        link: '/skills',
        name: 'Skills'
    },
    {
        link: '/education',
        name: 'Education'
    },
    {
        link: '/admin',
        name: 'Admin'
    },
]

const Navbar = (props) => {
    return (
        <div className={classes.content}>
            <Avatar />
                <MenuList>
                    {menuItems.map((item, i) => (
                        <NavLink key={i} to={item.link} className={classes.link} activeClassName={classes.active}>
                            <MenuItem className={classes.item}>{item.name}</MenuItem>
                        </NavLink>
                    ))}
                </MenuList>
        </div>
    )
}
export default Navbar;