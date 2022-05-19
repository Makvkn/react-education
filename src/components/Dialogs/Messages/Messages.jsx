import s from './../Dialogs.module.css'
import React from "react";
import MessageItem from "./MessageItem/MessageItem";

const Messages = (props) => {
    let newMessageElement = React.createRef()
    let messagesElements = props.messages.map(m => <MessageItem key={m.id} id={m.id} message={m.message}/>)

    const onAddMessage = () => {
        props.addMessage()
    }


    const onChangeMessage = () => {
        let userMessage = newMessageElement.current.value;

        props.updateNewMessage(userMessage)
    }

    return (
       <div>
           <div className={s.messages}>
               {messagesElements}
           </div>
           <div className={s.sendMess}>
               <textarea className={s.textsend} onChange={onChangeMessage} value={props.newMessagesText} ref={newMessageElement} name="" id="" cols="30" rows="1"></textarea>
               <button className={s.sendButton} onClick={onAddMessage}>Send</button>
           </div>
       </div>

    )
}

export default Messages