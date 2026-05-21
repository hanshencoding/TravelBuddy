import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";

function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {loginUser} = useLogin();

    const handleSubmit = (e : React.FormEvent) =>{
        e.preventDefault();
        loginUser({email, password});
    }

    return(
        <div id = "login-register-page">
            <div className="login-register-container">
                <div className="title-register-container">
                    <p className="brand-1-login"><strong>Travel</strong></p>
                    <p className="brand-2-login"><strong>Buddy</strong></p>
                </div>
                <form onSubmit={handleSubmit} className="form-login-register">
                    <input type="email" placeholder="Masukkan Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <input type="password" placeholder="Masukkan Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <button type="submit" className="btn-login"> Sign In </button>
                </form>
            </div>
        </div>
    );
    
}

export default LoginPage;