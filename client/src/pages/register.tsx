import React, { useState } from "react";
import { useRegister } from "../hooks/useRegister";


function RegisterPage(){
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const {registerUser} = useRegister();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        registerUser({username, email, password});
    };

    return(
        <div id = "login-register-page">
            <div className="login-register-container">
                <div className="title-register-container">
                    <p className="brand-1-login"><strong>Travel</strong></p>
                    <p className="brand-2-login"><strong>Buddy</strong></p>
                </div>
                <form onSubmit={handleSubmit} className="form-login-register">
                    <input type="text" placeholder="Masukkan Username" value={username} onChange={(e) => setUserName(e.target.value)} required/>
                    <input type="email" placeholder="Masukkan Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                    <input type="password" placeholder="Masukkan Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                    <button type="submit" className="btn-login"> Sign Up </button>
                </form>
            </div>
        </div>
    );
    
}

export default RegisterPage;