import Contacts from "../Contacts/Contacts";
import connect from "react-redux/lib/connect/connect";
import {getUserSelector} from "../../redux/selectors";

const mapStateToProps = (state) => {
    return {
        contacts: getUserSelector(state) && getUserSelector(state).contacts
    }
}

export const ContactsContainer = connect(mapStateToProps)(Contacts)