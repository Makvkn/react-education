import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import React from "react";

const MessageItem = (props) => {
    return (
        <div className={s.messages}>
            {props.message}
        </div>
    )
}
const Message = (props) => {
    let newMessageElement = React.createRef()
    let messagesElements = props.messages.map(m => <MessageItem id={m.id} message={m.message}/>)
    // let
    const addMessage = () => {
        let userMessage = newMessageElement.current.value;
        alert(userMessage)
    }

    return (
       <div>
           <div className={s.messages}>
               {messagesElements}
           </div>
           <div className={s.sendMess}>
               <textarea className={s.textsend} ref={newMessageElement} name="" id="" cols="30" rows="1"></textarea>
               <button className={s.sendButton} onClick={addMessage}>Send</button>
           </div>
       </div>

    )
}

export default Message