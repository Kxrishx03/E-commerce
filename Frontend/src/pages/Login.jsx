import { useState } from "react"
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

export function Login(){
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch();
    const {isFetching,error} = useSelector((state) => state.user);

    const handleClick = (e) =>{
            e.preventDefault();
            login(dispatch,{username,password});
    }
    return (
        <div className="register-page-container">
        <div className="registration-wrapper">
            <div className="title-registration"><h1>SIGN IN</h1></div>
            <form action="" className="form-login">
            
                <input className="login-form-input" type="text" placeholder="Username" onChange={(e)=> setUsername(e.target.value)} />
                <input className="login-form-input" type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                <button className="registration-btn"onClick={handleClick} 
                style={ isFetching ? { cursor: "not-allowed", backgroundColor: "lightTeal" } : {}}>LOGIN</button>
                {error ? <span className="error-login" style={{color:"red",margin:"10px",fontWeight:"600"}}>Something went wrong......</span>: null}
                <div className="link-registration"><a href="#">  <div className="link-registration">FORGOT PASSWORD?</div>
                <div className="link-registration"><a href="#">CREATE AN ACCOUNT</a></div></a></div>
            </form>
            </div>
        </div>
    )
}