import { loginFailure ,loginStart, loginSuccess} from "./userRedux";;
import { publicRequest } from "../requestMethods";


export const login = async ( dispatch,user) => {
    dispatch(loginStart());

    try {

        const res = await publicRequest.post("auths/login",user);
        dispatch(loginSuccess(res.data));

    } catch(err) {

        dispatch(loginFailure());

    }
}

export const register = async (username,email,password) => {
    try{
        
        const res = await publicRequest.post("auths/register",{
            username,
            email,
            password
        });
        console.log(res);

    } catch(err) {
        console.log({Message:err.message});
    }
}



