import React, { useContext , useState} from "react";
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
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../store/actions/auth'
import axios from 'axios'; 
import { useHistory } from "react-router-dom";
export function LoginForm(props) {


  const { switchToSignup } = useContext(AccountContext);
  const [status, setStatus] = useState(''); 
  const history = useHistory(); 
  
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state => state.authReducer) 

  const submitLogin = (e) => {
      e.preventDefault()
      console.log("submitting login"); 
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;
      
      
      dispatch(login({ email:email, password:password })).then((res) => {
        
          console.log("res", res);
          console.log("islog", isLoggedIn);
         
          if (res) {
             console.log("not moving to main");
              setStatus('user not found');
          }
          else{
              console.log("moving to main");
              history.push('/');
          }
         
      })
      .catch(err => {
        console.log("?", err); 
      })

  }

  // const finalCheck = () => {
  //     console.log("islog2", isLoggedIn);
  //     if(isLoggedIn === true){
  //       history.push('/');
  //     }
  //     else{
  //       setStatus('user not found');
  //     }
  // }

 

  return (
    <BoxContainer>
     
      <FormContainer>
        <Input id="loginEmail" placeholder="Email" />
        <Input id="loginPassword" type="password" placeholder="Password" />
      </FormContainer>
      <MutedLink href="#">Forgot Password?</MutedLink>
      <Marginer direction="vertical" margin="1.4em" />
      <SubmitButton onClick={submitLogin}>Login</SubmitButton>
      {status}
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">
        Dont have an Account?
        <Link to='/customer/access/signup' onClick={switchToSignup}>Sign Up</Link>
      </MutedLink>
    </BoxContainer>
  );
}
