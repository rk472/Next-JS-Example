import { Container, Paper, Typography, TextField, Button } from "@material-ui/core";


function Forgot(){
    return(
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
                    Forgot Password
                </Typography>
                <TextField 
                    variant="outlined"
                    label="Username"
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
                    Forgot Password
                </Button>
            </Paper>
        </Container>
    );
}

export default Forgot