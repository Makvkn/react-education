import s from './MyPosts.module.css'
import MyPost from "./Post/MyPost";
import React from "react";


const MyPosts = (props) => {
    let postElements = props.posts.map(p => <MyPost key={p.id} message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef();
    let onAddPost = () => {
    props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        //используем actionCreator
        props.updateNewPostText(text)
    }


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
                        <button onClick={onAddPost}>Add Post</button>
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