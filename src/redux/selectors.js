import {createSelector} from "reselect"
export const getUserSelector = (state) => {
    return state.user;
}

export const isSubmitingSelector = (state) => {
    return state.adminPage.isSubmiting;
}

// export const getAdminPageState = (state) => {
//     return state.adminPage;
// }

// export const isSubmitingSelector = createSelector(getAdminPageState, () => {
//     return getAdminPageState.isSubmiting;
// });
