import { Typography, Container, Grid, Paper, Button, Toolbar, AppBar } from "@material-ui/core";
import ProfileCard from "../src/Profile";


function Dashboard(){
    return (
        <div style={{
            margin: '-8px !important'
        }}>
            <AppBar position="fixed">
                <Toolbar style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Typography variant="h6" >
                        Blogz
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container maxWidth='lg' style={{
                marginTop: 60
            }}>
                <Grid container spacing={2}>
                    <Grid 
                        item
                        md={3}
                    >
                        <ProfileCard />
                    </Grid>
                    <Grid 
                        item
                        md={6}
                    >
                    
                        
                    </Grid>
                    <Grid 
                        item
                        md={3}
                    >
                        
                    </Grid>
                </Grid>
            </Container>
        </div>
        
    );
}

export default Dashboard