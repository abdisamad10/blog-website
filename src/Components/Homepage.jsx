// import React from 'react'
import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectSignedIn,
    setSignIn, 
    setUserData
} from "../Fatures/UserSlice";

import "../styling/Home.css";

import React from 'react';

const Homepage = ()  => {
    const isSignedIn = useSelector(selectSignedIn);

    const dispatch = useDispatch();
    const login = (responce) => {
        console.log(responce);
        dispatch(setSignIn(true));
        dispatch(setUserData(responce.profileObject));
    }
  return (
    <div className='home_page' style={{display: isSignedIn ? "none" : ""}}>
        {!isSignedIn ? (
            <div className='login_message'>
                <h2>📗</h2>
                <h1>A Readers favourite place</h1>
                <p>
                    we provide high quality online resource for readingblogs. just sign 
                    up and start reading some quality blogs.
                </p>
                <GoogleLogin
                clientId='1084334404054-jch76dh3eqbj787ostatku2t93h61muv.apps.googleusercontent.com'
                render={(renderProps) => (
                    <button 
                     onClick={renderProps.onClick}
                     disabled={renderProps.disabled}
                     className='login_button'
                     >
                        Login with Google
                    </button>
                )}
                onSuccess={login}
                onFailure={login}
                isSignedIn={true}
                cookiePolicy={"single_host_origin"}
                    />
            </div>
        ) : (
            ""
        )}
          </div>
  );
}

export default Homepage;