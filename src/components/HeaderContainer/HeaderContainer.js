import connect from "react-redux/lib/connect/connect";
import Header from "../Header/Header";
import axios from "axios";
import {setUserActionCreator} from "../../redux/user-reducer";
import {getUserSelector} from "../../redux/selectors";

const mapStateToProps = (state) => {
    return {
        user: getUserSelector(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUser(data) {
            let action = setUserActionCreator({ user: data })
            dispatch(action);
        }
    }
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);