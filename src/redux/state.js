
let rerenderEntireTree = () => {
    console.log('state is changed')
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi', likesCount: 0},
            {id: 2, message: 'Hello', likesCount: 10},
            {id: 3, message: 'I miss you, saragurationsf', likesCount: 120},
            {id: 4, message: 'How do you do, ayo', likesCount: 10},
            {id: 5, message: 'Good Evening', likesCount: 140}
        ],
    newPostText: 'Hello, are you okey?'},
    messagesPage: {
        messages: [
            {id: 1, message: 'Hello, How are you?'},
            {id: 2, message: 'Good Bye, Bro'},
            {id: 3, message: 'I miss you, saragurationsf'},
            {id: 4, message: 'akellafds'},
            {id: 5, message: 'horoshidf'}
        ],
        dialogs: [
            {id: 1, name: 'Dmitriy'},
            {id: 2, name: 'Ser Gey'},
            {id: 3, name: 'Maria'},
            {id: 4, name: 'Svetlana'},
            {id: 5, name: 'Anastasiya'}
        ]
    }
}
// window.state = state
export let addPost = () => {
    let newPost = {
        id: 6,
        message: state.profilePage.newPostText,
        likesCount: 13
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
    console.log('idk')
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;   //observer паттерн
}

export default state;