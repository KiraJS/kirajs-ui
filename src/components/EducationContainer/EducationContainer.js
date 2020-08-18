import connect from "react-redux/lib/connect/connect";
import Education from "../Education/Education";
import {getUserSelector} from "../../redux/selectors";

const mapStateToProps = (state) => {
    return {
        education: getUserSelector(state) && getUserSelector(state).education
    }
}
export const EducationContainer = connect(mapStateToProps)(Education);