import React from 'react';
import FormInput from '../FormInput/form-input.component';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {auth ,signInWithGoogle} from '../firebase/firebase.utils';
class SignIn extends React.Component{

    constructor(){
        super();
        this.state = {
            email : '',
            password: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {email , password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email : '' , password : ''})
        } catch (error) {
            
        }

       
    }
    handleChange = event => {
        const {name , value} = event.target ;
        this.setState({[name] : value});
    }

    
    render(){
        return(
            <div className="Sign-In">
                <h2 className="title"> I alraedy have an account</h2>
                <span>Sign In with your email and Password</span>
                
                <form onSubmit={this.handleSubmit}>
                <FormInput label="Email" name="email" type="email" onChange={this.handleChange} value={this.state.email} required />
                
                <FormInput label="Password" name="password" type="password" onChange={this.handleChange} value={this.state.password} required />
                <div className="buttons">
                <CustomButton type="submit" value="Submit form" >SIGN IN </CustomButton>
                <CustomButton onClick={signInWithGoogle} >SIGN IN WITH GOOGLE </CustomButton>

                </div>
                
                </form>
            </div>
        )
    }
}
export default SignIn;








