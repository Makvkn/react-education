const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';

let initialState = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 0},
        {id: 2, message: 'Hello', likesCount: 10},
        {id: 3, message: 'I miss you, saragurationsf', likesCount: 120},
        {id: 4, message: 'How do you do, ayo', likesCount: 10},
        {id: 5, message: 'Good Evening', likesCount: 140}
    ],
    newPostText: 'Hello, are you okey?'}


const profileReducer = (state= initialState, action) => {

    function addPost() {

        // state.posts.push(newPost);
        // state.newPostText = '';
    }

    function  updateNewPostText(newText) {

        // state.newPostText = newText
        // return stateCopy
    }

    switch (action.type) {
        case ADD_POST:
        {let newPost = {
            id: 6,
            message: state.newPostText,
            likesCount: 13
        }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy}
            break;
        case UPDATE_POST:
        {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }
            break;
    }
    return state;
}

//actionCreator for addPost
export const addPostActionCreator = () => ({type: ADD_POST})

//actionCreator for updatePost
export const updatePostActionCreator = (text) => ({
    type: UPDATE_POST, newText: text
})


    export default profileReducer;