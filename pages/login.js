import {Container, Paper, Typography, Button, InputAdornment, IconButton} from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import VisibleIcon from "@material-ui/icons/Visibility";
import InVisibleIcon from "@material-ui/icons/VisibilityOff";
import dynamic from 'next/dynamic';
import Router from 'next/router';
import loginAPI from '../apis/login';
import profileAPI from '../apis/profile';

const TextField = dynamic(() => import('@material-ui/core/TextField'), {ssr: false});

function Login(){
  const [userName , setUserName] = React.useState('');
  const [userNameError , setUserNameError] = React.useState('');
  const [password , setPassword] = React.useState('');
  const [passwordError , setPasswordError] = React.useState('');
  const [visibility, setVisibility] = React.useState(false);

  const [focus, setFocus] = React.useState(false);

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
      if(password.length < 4){
        setPasswordError('Password must be 4 characters');
        return false;
      }else{
        setPasswordError('');
      }
    }
    return true;
  }
 
  const handlelogin = async () => {
      if(validateFields()){
        const response = await loginAPI(userName,password);
        if(response.data.result !== null){
            if(response.data.result === false){
                setLoginSuccess(response.data.reason);
            }else {
                // const userData = await profileAPI(response.data.id);
                window.localStorage.setItem('userId',response.data.id);
                // window.localStorage.setItem('userData',userData.data);
                Router.replace('/');
            }
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
                  <a>Register Now</a>
                </Link>
                <Link href="/forgot_password">
                  <a>Forgot password ?</a>
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
