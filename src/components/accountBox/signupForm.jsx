import React, { useContext, useState } from "react";
import { Marginer } from "../marginer";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { AccountContext } from "./context";
import { Link } from 'react-router-dom'
import { useDispatch ,useSelector} from 'react-redux'
import { register } from '../../store/actions/auth'
import { useHistory } from "react-router-dom";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const [status, setStatus] = useState(''); 

  const history = useHistory(); 
  const dispatch = useDispatch()
  const user = useSelector(state => state.authReducer)
  const submitLogin = (e) => {
    e.preventDefault()
      console.log("submitting login"); 
      const fullNname = document.getElementById("fullname").value; 
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value; 
      const checkPassword = document.getElementById("checkPassword").value;

      if(password !== checkPassword){
          setStatus('password does not match'); 
      }

      else if(email.indexOf('@') == -1){
          setStatus('Email invalidd'); 
      }

      else{
        dispatch(register({ fullName: fullNname, email:email, password:password })).then(() => {
          console.log("res", user);
          console.log("moving to main");
          history.push('/');
        })
        .catch(err => {
          console.log("?", err); 
        })
      }
      
  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input id="fullname" placeholder="Full Name" />
        <Input id="loginEmail" placeholder="Email" />
        <Input id="loginPassword" type="password" placeholder="Password" />
        <Input id="checkPassword"type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton onClick={submitLogin}> Sign up </SubmitButton>
      {status}
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">
        Already have an account?
        <Link to='/customer/access/signin' onClick={switchToSignin}>Sign In</Link>
      </MutedLink>
    </BoxContainer>
  );
}
