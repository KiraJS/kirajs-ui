import React from "react";
import {usersAPI} from "../api/api";
import {userId} from "../config";
import {startSubmitActionCreator, stopSubmitActionCreator} from "./admin-page-reducer";

const SET_USER = "SET-USER";
const DELETE_USER_DATA_ITEM = "DELETE-USER-DATA-ITEM"

let initialState = null;

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {...state, ...action.payload};
    }
    return state;
}

export let setUserActionCreator = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
};

export const updateUserThunkCreator = (user) => {
    return (dispatch) => {
        dispatch(startSubmitActionCreator())

        usersAPI.updateUser(userId, user).then((user) => {
            dispatch(setUserActionCreator(user));
            dispatch(stopSubmitActionCreator());
        });
    };
}

export const setUserThunkCreator = () => {
    return (dispatch) => {
        usersAPI.getUser(userId).then((user) => {
            dispatch(setUserActionCreator(user));
        });
    };
}

export default userReducer;