const START_SUBMIT = 'START-SUBMIT';
const STOP_SUBMIT = 'STOP-SUBMIT';


let initialState = {
    isSubmitting: false
}
export const adminPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_SUBMIT:
            return  {...state, ...action.payload};
        case STOP_SUBMIT:
            return  {...state, ...action.payload};
    }
    return state;
}

export let startSubmitActionCreator = () => {
    return {
        type: START_SUBMIT,
        payload: { isSubmitting: true }
    }
};

export let stopSubmitActionCreator = () => {
    return {
        type: STOP_SUBMIT,
        payload: { isSubmitting: false }
    }
};
