export function Login(){
    return (
        <div className="register-page-container">
        <div className="registration-wrapper">
            <div className="title-registration"><h1>SIGN IN</h1></div>
            <form action="" className="form-login">
            
                <input className="login-form-input" type="text" placeholder="Username" />
                <input className="login-form-input" type="password" placeholder="Password" />
                <button className="registration-btn">LOGIN</button>
                <div className="link-registration"><a href="#">  <div className="link-registration">FORGOT PASSWORD?</div>
                <div className="link-registration"><a href="#">CREATE AN ACCOUNT</a></div></a></div>
            </form>
            </div>
        </div>
    )
}