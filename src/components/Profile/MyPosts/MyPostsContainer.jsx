// import MyPosts from "./Post/MyPost";
import React from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



// const MyPostsContainer = (props) => {
//
//     let state = props.store.getState();
//     let addPost = () => {
//         //используем actionCreator
//         props.store.dispatch(addPostActionCreator());
//     }
//
//     let onPostChange = (text) => {
//         //используем actionCreator
//         let action = updatePostActionCreator(text);
//         props.store.dispatch(action)
//     }
// debugger;
//
//     return (<MyPosts
//         updateNewPostText={onPostChange}
//         addPost={addPost}
//         posts={state.profilePage.posts}
//         newPostText={state.profilePage.newPostText}
//     />)
// }





let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updatePostActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }

    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;