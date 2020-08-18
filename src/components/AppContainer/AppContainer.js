import connect from "react-redux/lib/connect/connect";
import {setUserActionCreator, setUserThunkCreator} from "../../redux/user-reducer";
import App from "../../App";
import {getUserSelector} from "../../redux/selectors";

const mapStateToProps = (state) => {
    return {
        user: getUserSelector(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUser() {
            dispatch(setUserThunkCreator());
        }
    }
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);