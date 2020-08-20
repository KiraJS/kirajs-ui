import React from "react";
import {adminPageReducer, startSubmitActionCreator, stopSubmitActionCreator} from "./admin-page-reducer"

describe('admin logic tests', () => {

    it('should switch isSubmiting to true', () => {
        let action = startSubmitActionCreator();
        let state = {
            isSubmiting: false
        }
        let newState = adminPageReducer(state, action);

        expect(newState.isSubmiting).toBe(true);
    });

    it('should switch isSubmiting to false', () => {
        let action = stopSubmitActionCreator();
        let state = {
            isSubmiting: true
        }
        let newState = adminPageReducer(state, action);

        expect(newState.isSubmiting).toBe(false);
    });

});