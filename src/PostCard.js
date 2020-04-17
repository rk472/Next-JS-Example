import { Card, CardHeader, Avatar, CardActions, IconButton, Typography, Menu, MenuItem, CardContent } from "@material-ui/core";
import UnLikeIcon from "@material-ui/icons/FavoriteBorder";
import LikeIcon from "@material-ui/icons/Favorite";
import MenuIcon from "@material-ui/icons/MoreVert";
import React from "react";

export default function PostCard({postData}){
    
    const [liked, setLiked] = React.useState(false);
    const [anchorElement, setAnchorElement] = React.useState(null);

    const handleClose = () => {
        setAnchorElement(null);
    }

    return (
        <>
            <Card style={{
                marginBottom: 20
            }}>
                <CardHeader 
                    avatar= {
                        <Avatar>
                            {postData ? postData.name.charAt(0) : '' }
                        </Avatar>
                    }
                    title={postData ? postData.name : '' }
                    subheader={ postData ? postData.timestamp : ''}
                    action={
                        <IconButton onClick={(event)=>{setAnchorElement(event.currentTarget);}}>
                            <MenuIcon />
                        </IconButton>
                    }
                />
                <CardContent>
                    <Typography variant="h5">
                        {postData ? postData.title : ''}
                    </Typography>
                    <Typography variant="h6">
                        {postData ? postData.description : ''}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton onClick={()=>{setLiked(!liked);}}>
                        {
                            liked? <LikeIcon /> : <UnLikeIcon />
                        }
                    </IconButton>
                </CardActions>
            </Card>
            <Menu
                anchorEl={anchorElement}
                open={Boolean(anchorElement)}
                onClose={handleClose}
                keepMounted
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Block</MenuItem>
            </Menu>
        </>
    );
}