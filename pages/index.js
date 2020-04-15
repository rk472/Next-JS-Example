import { Container, Grid, Paper, Button, Toolbar, AppBar } from "@material-ui/core";
import ProfileCard from "../src/Profile";
import PostCard from "../src/PostCard";
import UserCard from "../src/UserCard";
import { useEffect } from "react";


function Dashboard(){

    useEffect(()=>{
        const userData = window.localStorage.getItem('userData');
        console.log('User Data ------- > ',userData);
    },[]);
    
    return (
        <div style={{
            margin: '-8px !important'
        }}>
            <Container maxWidth='lg' style={{
                marginTop: 80
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
                        <PostCard /> 
                        <PostCard /> 
                        <PostCard /> 
                        <PostCard /> 
                    </Grid>
                    <Grid 
                        item
                        md={3}
                    >
                        <UserCard />
                        <UserCard />
                        <UserCard />
                        <UserCard />
                    </Grid>
                </Grid>
            </Container>
        </div>
        
    );
}

export default Dashboard