import Admin from "../Admin/Admin";
import {updateUserThunkCreator} from "../../redux/user-reducer";
import React from "react";
import connect from "react-redux/lib/connect/connect";
import {compose} from "redux";
import {getUserSelector, isSubmitingSelector} from "../../redux/selectors";

const compareUser = (data) => {
    let user = {
        name: data.name,
        role: data.role,
        education: [...data.education],
        experience: [...data.experience],
        contacts: [...data.contacts],
        skills: [...data.skills]
    };
    return user;
}

const mapStateToProps = (state) => {
    return {
        user: getUserSelector(state),
        isSubmiting: isSubmitingSelector(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem(data, name, index) {
            let user = compareUser(data);
            const items = user[name].filter((item, i) => i !== index);
            user[name] = items;

            dispatch(updateUserThunkCreator(user));
        },
        updateUser(data) {
            let user = compareUser(data);
            dispatch(updateUserThunkCreator(user));
        },
    }
}

export const AdminContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Admin);