import s from './Dialogs.module.css';
import Messages from "./Messages/Messages";
import Dialog from "./Dialog/Dialog";
import MessagesContainer from "./Messages/MessagesContainer";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            {/*<Dialog dialogs={props.state.dialogs} dispatch={props.dispatch}/>*/}

            <MessagesContainer />
        </div>
    )
}

export default Dialogs