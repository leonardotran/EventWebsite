import React, { useContext , useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import { AccountContext } from "./context";
import { login } from '../../store/actions/auth'

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
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  status: {
   color: 'red',
   alignItems: 'left',
  },
  
}));

export function LoginForm(props) {
  const classes = useStyles();
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
              setStatus('Incorrect Email or Password.');
              document.getElementById("loginEmail").value= "";
              document.getElementById("loginPassword").value= "";
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

  return (

    <Grid container height="100%" component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AccountBoxRoundedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <form className={classes.form} noValidate>
          <h4 className={classes.status}>{status}</h4>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="loginEmail"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="loginPassword"
              autoComplete="current-password"
            />
            
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={submitLogin} type="submit"
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to='/customer/access/forgotPassword' onClick={switchToSignup} variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to='/customer/access/signup' onClick={switchToSignup} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  
  );
}