import { Container, Paper, Typography, Button, InputAdornment, IconButton } from "@material-ui/core";
import VisibleIcon from "@material-ui/icons/Visibility";
import InVisibleIcon from "@material-ui/icons/VisibilityOff";
import Router from "next/router";
import dynamic from 'next/dynamic';
const TextField = dynamic(() => import('@material-ui/core/TextField'), {ssr: false});

function Register(){
    const [userName , setUserName] = React.useState('');
    const [userNameError , setUserNameError] = React.useState('');
    
    const [name , setName] = React.useState('');
    const [nameError , setNameError] = React.useState('');
    
    const [password , setPassword] = React.useState('');
    const [passwordError , setPasswordError] = React.useState('');
    
    const [visibility, setVisibility] = React.useState(false);

    const validateFields = () => {
        if(userName === ''){
          setUserNameError('Username must not be empty');
          return false;
        }else {
          setUserNameError('');
        }
        if(name === ''){
            setNameError('Name must not be empty');
            return false;
          }else {
            setNameError('');
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
    
      const handleRegister = () => {
          if(validateFields()){
              Router.replace('/dashboard');
          }
      }

    return (
        <Container
            maxWidth="md"
            style={{
                height: '-webkit-fill-available',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
        >
            <Paper 
                elevation={3}
                style={{
                    padding: 36,
                    display: 'flex',
                    width: '60%',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Typography variant="h4">
                    Register Here
                </Typography>
                
                <TextField 
                    variant="outlined"
                    label="Name"
                    error={nameError === '' ? false : true}
                    helperText={nameError}
                    fullWidth
                    value={name}
                    onChange={(event)=>{setName(event.target.value);}}
                    style={{
                        margin: 30
                    }}
                />
                <TextField 
                    variant="outlined"
                    error={userNameError === '' ? false : true}
                    helperText={userNameError}
                    label="Username"
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
                    style={{
                        margin: 30
                    }}
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
                    fullWidth
                    color="primary"
                    onClick={handleRegister}
                    variant="contained"
                >
                    Register
                </Button>

            </Paper>

        </Container>
    );  

}

export default Register