import {AUTHETICATION} from '../dispatchRefs';


const initialState = {
    currentUsername : "",
    currentPassword: "",
    isAdmin : false,
    isGuest : false,
    isAuthorized : false,
    admin : {
        username : "admin@gmail.com",
        password : "admin123"
    },
    guest :{
        username : "guest@gmail.com",
        password : "guest123"
    }
}
const loginReducer = (state = initialState,action) =>{
    switch(action.type){
        case AUTHETICATION : 
        const {username, password} = action.payload;
        if(username === state.admin.username && password === state.admin.password){
            return {
                ...initialState,
                isAdmin : true,
                currentUsername : username,
                currentPassword : password,
                isAuthorized : true
            }
        }
        else if(username === state.guest.username && password === state.guest.password){
            return {
                ...initialState,
                isGuest : true,
                currentUsername : username,
                currentPassword : password,
                isAuthorized : true,
            }
        } else{
            return {
                ...initialState,
                currentUsername : username,
                currentPassword : password
            };            
        }
        default : return state;
    }
}

export default loginReducer;
