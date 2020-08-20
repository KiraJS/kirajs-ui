import React from "react";
import {adminPageReducer, startSubmitActionCreator, stopSubmitActionCreator} from "./admin-page-reducer"

describe('admin logic tests', () => {


    it('should switch isSubmittingto true', () => {
        let action = startSubmitActionCreator();
        let state = {
            isSubmiting: false
        }
        let newState = adminPageReducer(state, action);

        expect(newState.isSubmitting).toBe(true);
    });

    it('should switch isSubmittingto false', () => {
        let action = stopSubmitActionCreator();
        let state = {
            isSubmiting: true
        }
        let newState = adminPageReducer(state, action);

        expect(newState.isSubmitting).toBe(false);
    });

});