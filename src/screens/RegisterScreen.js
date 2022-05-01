import React, {useRef} from 'react';
import * as service from '../services/authorization-service'
import {useNavigate} from "react-router-dom";
import {useProfile} from "../contexts/profile-context";

const Register = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const userType = useRef()
    const navigate = useNavigate()
    const {signup} = useProfile()
    const handleSignup = async () => {
        try {
            await signup(
                emailRef.current.value,
                passwordRef.current.value,
                userType.current.value
            )
            navigate('/profile')
        } catch (e) {
            alert('One or more fields is missing, please try again.')
        }
    }
    return (
        <div>
            <h1>Register</h1>
            <input ref={emailRef} placeholder="email" className="form-control" type="email"/>
            <select ref={userType}>
                <option value="critic">Critic</option>
                <option value="user">User</option>
            </select>
            <input ref={passwordRef} placeholder="password" className="form-control" type="password"/>
            <button onClick={handleSignup} className="btn btn-primary">
                Register
            </button>
        </div>
    );
};

export default Register;