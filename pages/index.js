import { Container, Grid, CircularProgress } from "@material-ui/core";
import ProfileCard from "../src/Profile";
import PostCard from "../src/PostCard";
import UserCard from "../src/UserCard";
import { useEffect, useState } from "react";
import profileAPI from "../apis/profile";
import postsAPI from "../apis/posts";


function Dashboard(){

    const [userData, setUserData] = useState(null);
    const [posts, setPosts] = useState([]);
    const [postLoading, setPostLoading] = useState(true);
    const [profileLoading, setProfileLoading] = useState(true);

    useEffect(()=>{
        async function fetchData() {
            const userId = window.localStorage.getItem('userId');
            const userData = await profileAPI(userId);
            setUserData(userData.data);
            setProfileLoading(false);
            const allPosts = await postsAPI(userId);
            setPosts(allPosts.data);
            setPostLoading(false);
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
                        <ProfileCard userInfo={userData} profileLoading={profileLoading} />
                    </Grid>
                    <Grid 
                        item
                        md={6}
                    >
                        {
                            postLoading ? 
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: 30
                                }}>
                                    <CircularProgress />
                                </div>  
                            : posts.map((each, itemPosition) =>
                                <PostCard postData={each} key={itemPosition}/> 
                            )
                        }
                         
                    </Grid>
                    <Grid 
                        item
                        md={3}
                    >
                        <UserCard />
                    </Grid>
                </Grid>
            </Container>
        </div>
        
    );
}

export default Dashboard