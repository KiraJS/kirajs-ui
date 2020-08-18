import connect from "react-redux/lib/connect/connect";
import Skills from "../Skills/Skills";
import {getUserSelector} from "../../redux/selectors";

const mapStateToProps = (state) => {
    return {
        skills: getUserSelector(state) && getUserSelector(state).skills
    }
}
export const SkillsContainer  = connect(mapStateToProps)(Skills);