import { Card, CardHeader, Avatar, CardActions, IconButton, CardMedia } from "@material-ui/core";
import UnLikeIcon from "@material-ui/icons/FavoriteBorder";
import LikeIcon from "@material-ui/icons/Favorite";
import React from "react";

export default function HorizontalCard(){

    const [liked, setLiked] = React.useState(false);
    
    return (
        <Card style={{
            display: 'flex',
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
            />
            <CardMedia
                image="/rice.jpg"
                style={{
                    height: 300
                }}
            />
        </Card>
    );
}