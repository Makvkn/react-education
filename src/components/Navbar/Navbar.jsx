import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
            </div>
            <div className={s.item}>
                <a href="src/components/Navbar/Navbar">News</a>
            </div>
            <div className={s.item}>
                <a href="src/components/Navbar/Navbar">Music</a>
            </div>
            <div className={s.item}>
                <a href="src/components/Navbar/Navbar">Settings</a>
            </div>
        </nav>
    )
}

export default Navbar