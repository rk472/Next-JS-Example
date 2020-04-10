import { Paper, Typography,Avatar, Button } from "@material-ui/core";
import React from "react";

export default function ProfileCard() {
    const [name , setName] = React.useState('Demo');
    return (
        <Paper elevation={3}>
            <Avatar>
                A    
            </Avatar>
            <Typography>
                Jone Doe    
            </Typography>    
            <Typography>
                johndoe12@gmail.com    
            </Typography>  
            <Button color="secondary">
                Logout
            </Button>      
        </Paper>
    );  
};