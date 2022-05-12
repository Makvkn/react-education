import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Dialog = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name} />)

    return (
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
    )
}

export default Dialog