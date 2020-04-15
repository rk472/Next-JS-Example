import { Card, CardHeader, Avatar, CardActions, IconButton, CardMedia, Menu, MenuItem } from "@material-ui/core";
import UnLikeIcon from "@material-ui/icons/FavoriteBorder";
import LikeIcon from "@material-ui/icons/Favorite";
import MenuIcon from "@material-ui/icons/MoreVert";
import React from "react";

export default function PostCard(){
    
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
                            R
                        </Avatar>
                    }
                    title="John Doe"
                    subheader="12:00 PM, 12/02/2020"
                    action={
                        <IconButton onClick={(event)=>{setAnchorElement(event.currentTarget);}}>
                            <MenuIcon />
                        </IconButton>
                    }
                />
                <CardMedia
                    image="/rice.jpg"
                    style={{
                        height: 300
                    }}
                />
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