import s from "../../Dialogs.module.css";


const MessageItem = (props) => {
    return (
        <div className={s.messages}>
            {props.message}
        </div>
    )
}

export default MessageItem