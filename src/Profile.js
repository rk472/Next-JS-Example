import { Paper, Typography,Avatar, Button } from "@material-ui/core";
import React from "react";

export default function ProfileCard() {
    const [name , setName] = React.useState('Demo');
    return (
        <Paper elevation={3} style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20
        }}>
            <Avatar style={{
                width: 120,
                height: 120,
                borderWidth: 2,
                borderColor: '#f8eeee',
                borderStyle: 'solid'
            }}
            src="/teenager.png" />
            <Typography variant="h5" style={{
                fontWeight: 600,
                marginTop: 10,
                marginBottom: 10
            }}>
                Jone Doe    
            </Typography>    
            <Typography>
                johndoe12@gmail.com    
            </Typography>  
            <Button color="secondary" variant="contained" style={{
                margin: 10
            }}>
                Logout
            </Button>      
        </Paper>
    );  
};