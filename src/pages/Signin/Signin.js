import React, { useEffect, useState } from 'react';
import './Signin.css'
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signin = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        other: ""
    })
    const [
        createUserWithEmailAndPassword,
        u,
        loading,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true, sendPasswordResetEmail: true });
    // Google Signin
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [user] = useAuthState(auth)
    // Email
    const handleEmail = (e) => {
        const emailRegax = /\S+@\S+\.\S+/;
        const validEmail = emailRegax.test(e.target.value);
        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value })
            setErrors({ ...errors, email: "" })
        }
        else {
            setErrors({ ...errors, email: "Invalid email id" })
            setUserInfo({ ...userInfo, email: "" })
        }
    }
    // Password 
    const handlePassword = (e) => {
        const passwordRegax = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const validPassword = passwordRegax.test(e.target.value);
        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value })
            setErrors({ ...errors, password: "" })
        }
        else {
            setErrors({ ...errors, password: "wrong password" });
            setUserInfo({ ...userInfo, password: "" })
        }

    }
    // confirm password
    const handleConfirmPassword = (e) => {
        if (e.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPassword: e.target.value })
            setErrors({ ...errors, password: "" })
        }
        else {
            setErrors({ ...errors, password: "please set correct password" });
            setUserInfo({ ...userInfo, confirmPassword: "" })
        }

    }

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(userInfo.email)
        console.log(userInfo.password)
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    }
    useEffect(() => {
        if (hookError) {
            if (hookError?.code === "auth/invalid-email") {
                toast("Please provide a valid email")
            }
            else if (hookError?.code === "auth/invalid-password") {
                toast("please type correct password")
            }
            else if (hookError?.code === "auth/missing-email") {
                toast("set your email")
            }
        }
    }, [hookError])

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {

            navigate(from)
        }
    }, [user])

    return (
        <div>
            <form onSubmit={handleLogin} >
                <div className='container' >
                    <h3>Sign in</h3>
                    <h6>Email</h6>
                    <input type="email" placeholder=' email' onChange={handleEmail} />
                    {errors?.email && <p className='error-msg'>{errors.email}</p>}
                    <h6>Password</h6>
                    <input type="text" placeholder=' password' onChange={handlePassword} />
                    {errors?.password && <p className='error-msg'>{errors.password}</p>}
                    <br />
                    <h6>Confirm Password</h6>
                    <input type="text" placeholder='Confirm password' onChange={handleConfirmPassword} />
                    {errors?.password && <p className='error-msg'>{errors.password}</p>}
                    <br />
                    <button className='btn btn-dark mt-5 w-75' type="submit">Sign in</button>
                    <button className='btn btn-light w-75 mt-2' onClick={() => signInWithGoogle()}>
                    Google Signin</button>
                    <p> <Link to="/login">please Login</Link></p>

                    {/* {error && <p className='error-msg'>{error}</p>} */}
                    {/* {hookError && <p>{hookError?.message}</p>} */}
                    <ToastContainer />
                </div>
            </form>
        </div>
    );
};

export default Signin;