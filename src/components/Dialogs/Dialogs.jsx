import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id='1' name='Dmitriy'/>
                <DialogItem id='2' name='Ser Gey'/>
                <DialogItem id='3' name='Maria'/>
                <DialogItem id='4' name='Svetlana'/>
                <DialogItem id='5' name='Anastasiya'/>
            </div>
            <div className="messages">
                <div className={s.message}>
                    Hello, How are you?
                </div>
                <div className={s.message}>
                    Good Bye, Bro.
                </div>
                <div className={s.message}>
                    I miss you, sweety
                </div>
            </div>
        </div>
    )
}

export default Dialogs