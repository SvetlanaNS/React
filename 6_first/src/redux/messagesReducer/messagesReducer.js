

const initialState = {
    messages: [
        
            {
                id:1,
                title:'Who are you?',
                chatId: 2,
            },
            {
                id:2,
                title:'Who?',
                chatId: 3,
            },
            {
                id:3,
                title:'Who Kate?',
                chatId: 1,
            },
        
        
    ]
}

export const messageReducer = (state = initialState ,action) =>{
switch (action.type) {
     default:
           return state
            }
        }