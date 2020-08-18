import React from "react";
import Experience from "../Experience/Experience";
import connect from "react-redux/lib/connect/connect";
import {compose} from "redux";
import {getUserSelector} from "../../redux/selectors";

let mapStateToProps = (state) => {
    return {
        experienceItems: getUserSelector(state) && getUserSelector(state).experience
    };
};

export const ExperienceContainer = compose(
    connect(mapStateToProps)
)(Experience);
