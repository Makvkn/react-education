import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <Dialog dialogs={props.state.dialogs}/>
            <Message messages={props.state.messages}/>
        </div>
    )
}

export default Dialogs