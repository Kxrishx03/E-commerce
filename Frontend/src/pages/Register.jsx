export function Register() {
    return (
        <div className="register-page-container">
        <div className="registration-wrapper">
            <div className="title-registration"><h1>CREATE AN ACCOUNT</h1></div>
            <form action="" className="form-registration">
                <input className="registration-form-input" type="text" placeholder="First Name" />
                <input className="registration-form-input" type="text" placeholder="Last Name" />
                <input className="registration-form-input" type="text" placeholder="Username" />
                <input className="registration-form-input" type="text" placeholder="Email" />
                <input className="registration-form-input" type="password" placeholder="Password" />
                <input className="registration-form-input" type="password" placeholder="Confirm Password" />

                <div className="agreement-rp">
                    <span>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </span>
                </div>
                <button className="registration-btn">REGISTER</button>
            </form>
            </div>
        </div>
    );
}
