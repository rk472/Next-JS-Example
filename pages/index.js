import { Container, Grid, Paper, Button, Toolbar, AppBar } from "@material-ui/core";
import ProfileCard from "../src/Profile";
import PostCard from "../src/PostCard";
import UserCard from "../src/UserCard";
import { useEffect, useState } from "react";
import profileAPI from "../apis/profile";
import postsAPI from "../apis/posts";


function Dashboard(){

    const [userData, setUserData] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const userId = window.localStorage.getItem('userId');
            const userData = await profileAPI(userId);
            setUserData(userData.data);
            const allPosts = await postsAPI(userId);
            setPosts(allPosts.data);
        }
        fetchData();        
    },[]);
    
    return (
        <div>
            <Container maxWidth='lg' style={{
                marginTop: 80
            }}>
                <Grid container spacing={2}>
                    <Grid 
                        item
                        md={3}
                    >
                        <ProfileCard userInfo={userData} />
                    </Grid>
                    <Grid 
                        item
                        md={6}
                    >
                        {
                            posts.map((each, itemPosition) =>
                                <PostCard postData={each} key={itemPosition}/> 
                            )
                        }
                         
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