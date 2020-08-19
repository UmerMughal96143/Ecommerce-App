import React from 'react';
import './sign-in-sign-up.styles.scss';
import SignIn from '../../SignIn/sign-in.component';
import SignUp from '../../sign-up/sign-up.components';


const SignInAndSignUp = () => (

    <div className="signinsignuppage">
       <SignIn/>
       <SignUp/>
    </div>
)
export default SignInAndSignUp;