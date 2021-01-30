import React, { useContext, useState } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import { AccountContext } from "./context";
import Container from '@material-ui/core/Container';
import { register } from '../../store/actions/auth'



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
      ATEX
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  status: {
    color: 'red',
    alignItems: 'left',
   },
}));



export function SignupForm(props) {
  const classes = useStyles();
  const { switchToSignin } = useContext(AccountContext);

  const [status, setStatus] = useState(''); 

  const history = useHistory(); 
  const dispatch = useDispatch()
  const user = useSelector(state => state.authReducer)

  const submitSignup = (e) => {
    e.preventDefault()
      console.log("submitting login"); 
      const fullName = document.getElementById("firstName").value +" " + document.getElementById("lastName").value; 
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value; 
      const checkPassword = document.getElementById("checkPassword").value;

      if(password !== checkPassword){
          setStatus('Password does not match'); 
      }

      else if(email.indexOf('@') == -1){
          setStatus('Email invalid'); 
      }

      else{
        dispatch(register({ fullName: fullName, email:email, password:password })).then(() => {
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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountBoxRoundedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <h4 className={classes.status}>{status}</h4>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="loginEmail"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="loginPassword"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Confirm Password"
                type="password"
                id="checkPassword"
                autoComplete="Confirm Password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submitSignup}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to='/customer/access/signin' onClick={switchToSignin} variant="body2" >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
   </Container>
  );
}