import {Container, Paper, Typography, TextField, Button, InputAdornment, IconButton} from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import VisibleIcon from "@material-ui/icons/Visibility";
import InVisibleIcon from "@material-ui/icons/VisibilityOff";
import Router from "next/router";

function Login(){
  const [userName , setUserName] = React.useState('');
  const [userNameError , setUserNameError] = React.useState('');
  const [password , setPassword] = React.useState('');
  const [passwordError , setPasswordError] = React.useState('');
  const [visibility, setVisibility] = React.useState(false);

  const [loginSuccess,setLoginSuccess] = React.useState('');

  const validateFields = () => {
    if(userName === ''){
      setUserNameError('Username must not be empty');
      return false;
    }else {
      setUserNameError('');
    }
    if(password === ''){
      setPasswordError('Password must not be empty');
      return false;
    }else {
      if(password.length < 8){
        setPasswordError('Password must be 8 characters');
        return false;
      }else{
        setPasswordError('');
      }
    }
    return true;
  }

  const handlelogin = () => {
      if(validateFields()){
        if(userName === 'demo@gmail.com' && password === 'password'){
          setLoginSuccess('Login is successful');
          Router.replace('/dashboard');
        }else{
          setLoginSuccess('Invalid Credentials');
        }
      }
  };

  return (
      <Container maxWidth="md" style={{
        height: '-webkit-fill-available',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
          <Paper elevation={4} style={{
            padding: 36,
            display: 'flex',
            width: '60%',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <Typography variant="h4">
              Login Here
            </Typography>
            <TextField
              error={userNameError === '' ? false : true}
              variant="outlined" 
              label="Username" 
              helperText={userNameError}
              type="text" 
              style={{
                marginTop: 30,
                marginBottom: 30
              }}
              value={userName}
              onChange={(event)=>{setUserName(event.target.value);}}
              fullWidth
              />
            <TextField 
              error={passwordError === '' ? false : true}
              variant="outlined" 
              label="Password" 
              type={visibility ? 'text' : 'password'} 
              helperText={passwordError}
              value={password}
              InputProps={{
                endAdornment: 
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={()=>{setVisibility(!visibility);}}>
                      {visibility ? <VisibleIcon /> : <InVisibleIcon/>}
                    </IconButton>
                  </InputAdornment>
              }}
              onChange={(event)=>{setPassword(event.target.value);}}
              fullWidth/>
            <Button 
              variant="contained"
              color="primary"
              fullWidth
              onClick={handlelogin}
              style={{
                margin: 30
              }}
              >
                Login
              </Button>
              <div style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between'
              }}>
                <Link href="/register">
                  Register Now
                </Link>
                <Link href="/forgot_password">
                  Forgot password ?
                </Link>
              </div>
              {
                loginSuccess !== '' ?
                <Typography>
                  {loginSuccess}
                </Typography> : ''
              }
          </Paper>
      </Container>
  );
}
export default Login
