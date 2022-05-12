import s from './MyPosts.module.css'
import MyPost from "./Post/MyPost";
import React from "react";


const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }
    // let on = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    let postElements = props.posts.map(p => <MyPost message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.content}>
            <div className={s.postBlock}>
                <h3>My Posts</h3>
                <div>
                    <div>
                        <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} name="" id=""
                                  cols="50" rows="1"></textarea>
                    </div>
                    <div>
                        <button onClick={addPost}>Add Post</button>
                    </div>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts