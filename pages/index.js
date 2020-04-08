import {Container, Button, Typography, TextField} from '@material-ui/core'

function Home(){
  return (
      <Container maxWidth="md">
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',
        alignItems: 'center'}}> 
            <Typography variant="h4">
              Demo
            </Typography>
            <TextField label="Demo" variant="outlined" style={{margin: 20}}/>
            <Button variant="contained" color="primary" >
              Hello World
            </Button>
          </div>
          
      </Container>
  );
}
export default Home
