import { loginFailure ,loginStart, loginSuccess} from "./userRedux";
import { registerStart, registerSuccess, registerFailure } from "./userRedux";
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



export const registerUser = async (dispatch, user) => {
    dispatch(registerStart());
    try {
        const res = await publicRequest.post("auths/register", user); // Ensure the endpoint is correct
        dispatch(registerSuccess(res.data));
    } catch (err) {
        dispatch(registerFailure());
    }
};