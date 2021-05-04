import {AUTHETICATION} from '../dispatchRefs';

const authenticate = (uname,pass) => async(dispatch,getState) =>{
    await dispatch({type : AUTHETICATION, payload : {username : uname, password : pass}})
    return getState().login;
}

export default authenticate; 