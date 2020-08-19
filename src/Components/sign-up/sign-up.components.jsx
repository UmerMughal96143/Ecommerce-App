import React from 'react';
import FormInput from '../FormInput/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.styles.scss';

import {auth , createUserProfileDoc} from '../firebase/firebase.utils';


class SignUp extends React.Component{

    constructor(){
        super();
        this.state = {
           displayName : '',
           email : '' ,
           password : '' , 
           confirmPassword : ''      
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert("password did'nt match");
            return ;
        }
            try {
                   const {user} = await auth.createUserWithEmailAndPassword(email , password);
                await   createUserProfileDoc(user , {displayName})
                    this.setState({
                        displayName : '',
           email : '' ,
           password : '' , 
           confirmPassword : '' 
                    });


            } catch (error) {
                console.log(error)
            }




    }


        handleChange = event => {
            const {name , value} = event.target ;
            this.setState({[name] : value})
        }





    render(){
        const {displayName , email,password,confirmPassword} = this.state;
        return(
            <div className="Sing-Up">
                <h2 className="title">
                     I do not have a account

                </h2>
                <span>Sign Up with your email and password</span>
                    <form className="Sign-Up-form" onSubmit={this.handleSubmit}>
                        <FormInput
                        
                        type="text"
                        name = "displayName"
                        value = {displayName}
                        onChange={this.handleChange}
                        label = "Display Name"
                        required
                        />
                            

                        
                        <FormInput
                        
                        type="text"
                        name = "email"
                        value = {email}
                        onChange={this.handleChange}
                        label = "Email"
                        required
                        />
                            

                        <FormInput
                        
                        type="password"
                        name = "password"
                        value = {password}
                        onChange={this.handleChange}
                        label = "Password"
                        required
                        />
                            

                        
                        <FormInput
                        
                        type="password"
                        name = "confirmPassword"
                        value = {confirmPassword}
                        onChange={this.handleChange}
                        label = "Confirm Password"
                        required
                        />
                            
                    <CustomButton type='submit' >SIGN UP</CustomButton>
                        



                    </form>
            </div>
        )
    }
}
export default SignUp;