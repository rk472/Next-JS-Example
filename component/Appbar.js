import {AppBar,Toolbar,Button,Typography,IconButton} from '@material-ui/core';
import DarkIcon from '@material-ui/icons/Brightness4'
import LightIcon from '@material-ui/icons/Brightness7'
import { useContext } from 'react';
import { ThemeColor } from '../src/theme';
import Router from 'next/router';

export default function Appbar(){

    const {themeType, setThemeType} = useContext(ThemeColor);

    const handleLogout = () => {
        window.localStorage.removeItem('userId');
        window.localStorage.removeItem('userData');
        Router.replace('/login');
    }

    return (
        <AppBar position="fixed">
            <Toolbar style={{
                display: 'flex',
            }}>
                <Typography variant="h6" >
                    Blogz
                </Typography>
                <IconButton onClick={()=>setThemeType(themeType === 'light'? 'dark' : 'light')} style={{marginLeft: 'auto',color: 'white'}}>
                    {
                        themeType === 'light' ? <DarkIcon /> : <LightIcon />
                    }
                </IconButton>
                <Button color="inherit" onClick={handleLogout}>Logout</Button>
            </Toolbar>
        </AppBar>
    );
}