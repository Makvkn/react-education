const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hello, How are you?'},
        {id: 2, message: 'Good Bye, Bro'},
        {id: 3, message: 'I miss you, saragurationsf'},
        {id: 4, message: 'akellafds'},
        {id: 5, message: 'horoshidf'}
    ],
    newMessageText: "Hi, i am fine, thx",
    dialogs: [
        {id: 1, name: 'Dmitriy'},
        {id: 2, name: 'Ser Gey'},
        {id: 3, name: 'Maria'},
        {id: 4, name: 'Svetlana'},
        {id: 5, name: 'Anastasiya'}
    ]
}


const dialogsReducer = (state = initialState, action) => {

    const addMessage = () => {
    }

    const updateNewMessage = (newTextMessage) => {
    }


    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 6,
                message: state.newMessageText
            }
            // state.messages.push(newMessage);
            // state.newMessageText = '';
            let body = state.newMessageText
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages, {id: 6, message: body}]
            // stateCopy.messages.push(newMessage)
            stateCopy.newMessageText = ''
            return stateCopy
        }
            break;
        case UPDATE_MESSAGE: {
            let stateCopy = {...state}
            stateCopy.newMessageText = action.newTextMessage
            return stateCopy
            // state.newMessageText = newTextMessage
        }
            break;
    }
    return state;
}

//actionCreator for addMessage
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

//actionCreator for updateMessage
export const updateMessageActionCreator = (text) => ({
    type: UPDATE_MESSAGE, newTextMessage: text
})



export default dialogsReducer;