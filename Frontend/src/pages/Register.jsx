import axios from "axios";
import React, { useState } from "react";
import { register } from "../redux/apiCalls";

export function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with:", { username, email, password });
        
        try {
            const response =  register(username, email, password);
            console.log("Registration response:", response);
            if (response) {
                window.location.replace("/login");
            }
        } catch (error) {
            console.error("Registration error:", error);
        }
    }

    return (
        <div className="register-page-container">
            <div className="registration-wrapper">
                <div className="title-registration">
                    <h1>CREATE AN ACCOUNT</h1>
                </div>
                <form className="form-registration" onSubmit={handleSubmit}>
                    <input className="registration-form-input" type="text" placeholder="First Name" />
                    <input className="registration-form-input" type="text" placeholder="Last Name" />
                    <input className="registration-form-input" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                    <input className="registration-form-input" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input className="registration-form-input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <input className="registration-form-input" type="password" placeholder="Confirm Password" />
                    <div className="agreement-rp">
                        <span>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></span>
                    </div>
                    <button className="registration-btn" type="submit">
                         REGISTER
                    </button>
                </form>
            </div>
        </div>
    );
}
