import { Container, Paper, Typography, TextField, Button } from "@material-ui/core";


function Register(){

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
                    fullWidth
                    style={{
                        margin: 30
                    }}
                />
                <TextField 
                    variant="outlined"
                    label="Username"
                    fullWidth
                />
                <TextField 
                    variant="outlined"
                    label="Password"
                    type="password"
                    fullWidth
                    style={{
                        margin: 30
                    }}
                />
                <Button
                    fullWidth
                    color="primary"
                    variant="contained"
                >
                    Register
                </Button>

            </Paper>

        </Container>
    );  

}

export default Register