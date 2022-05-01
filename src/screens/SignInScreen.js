import React, {useRef} from 'react';
import * as service from '../services/authorization-service'
import {useNavigate} from "react-router-dom";
import {useProfile} from "../contexts/profile-context";
import NavigationBar from "./../components/Navigation"

const SignIn = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()
    const {signin} = useProfile()
    const handleSignin = async () => {
        try {
            await signin(
                emailRef.current.value,
                passwordRef.current.value
            )
            navigate("/profile")
        } catch (e) {
            alert('oops')
        }
    }
    return (
        <div>
            <NavigationBar/>
            <h1>Sign In</h1>
            <input ref={emailRef} placeholder="email" className="form-control" type="email"/>
            <input ref={passwordRef} placeholder="password" className="form-control" type="password"/>
            <button onClick={handleSignin} className="btn btn-primary">
                Sign In
            </button>
        </div>
    );
};

export default SignIn;