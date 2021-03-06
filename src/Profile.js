import { Paper, Typography,Avatar, CircularProgress } from "@material-ui/core";
import React from "react";

export default function ProfileCard({userInfo, profileLoading}) {
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
            {
                profileLoading  ?
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 10
                    }}>
                        <CircularProgress />
                    </div>  
                : 
                <>
                    <Typography variant="h5" style={{
                        fontWeight: 600,
                        marginTop: 10,
                        marginBottom: 10
                    }}>
                        {userInfo ? userInfo.name : ''}    
                    </Typography>    
                    <Typography>
                        {userInfo ? userInfo.email : ''} 
                    </Typography>  
                    <Typography>
                        {userInfo ? userInfo.phone : ''} 
                    </Typography>
                </>  
            }
            
        </Paper>
    );  
};