import React from "react";
import {usersAPI} from "../api/api";
import {userId} from "../config";
import {startSubmitActionCreator, stopSubmitActionCreator} from "./admin-page-reducer";

const SET_USER = "SET-USER";

let initialState = null;

export const userReducer = (state = initialState, action) => {
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

export const updateUserThunkCreator = (user) => async (dispatch) => {
    dispatch(startSubmitActionCreator())
    let updatedUser = await usersAPI.updateUser(userId, user);
    dispatch(setUserActionCreator(updatedUser));
    dispatch(stopSubmitActionCreator());
}

export const setUserThunkCreator = () => async (dispatch) => {
    let user = await usersAPI.getUser(userId);
    dispatch(setUserActionCreator(user));
}
