import s from './../Dialogs.module.css'
import React from "react";
import MessageItem from "./MessageItem/MessageItem";
import {addMessageActionCreator, updateMessageActionCreator} from "../../../redux/dialogs-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";


// const MessagesContainer = (props) => {
//
//     let state = props.store.getState();
//     const addMessage = () => {
//         props.store.dispatch(addMessageActionCreator())
//     }
//
//     const changeMessage = (userMessage) => {
//         let actionMessage = updateMessageActionCreator(userMessage)
//         props.store.dispatch(actionMessage);
//     }
//
//     return (
//         <Messages updateNewMessage={changeMessage}
//                   addMessage = {addMessage}
//                   messages = {state.messagesPage.messages}
//                   newMessagesText = {state.messagesPage.newMessageText}
//         />
//     )
// }


let mapStateToProps = (state) => {
    return {
        messages: state.messagesPage.messages,
        newMessagesText: state.messagesPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (userMessage) => {
            dispatch(updateMessageActionCreator(userMessage))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }

    }
}


let MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);


export default MessagesContainer;