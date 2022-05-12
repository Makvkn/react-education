import s from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {updateNewPostText} from "./redux/state";


function App(props) {
    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <Header />
                <Navbar />
                <div className={s.appWrapperContent}>
                    <Routes>
                        <Route path="/dialogs*" element= {<Dialogs state={props.state.messagesPage} />}/>
                        <Route path="/profile" element={<Profile profilePage = {props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
