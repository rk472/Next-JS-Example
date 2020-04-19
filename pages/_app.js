import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import Appbar from '../component/Appbar';
import { lightTheme , darkTheme, ThemeColor } from '../src/theme';
import { CssBaseline } from '@material-ui/core';
import LoadingCustom from '../src/Loading'


export default class MyApp extends App {

    constructor(props) {
        super(props);
        this.state = {themeType: 'light',loading: true};
    }

    componentDidMount() {

       this.setState({loading: true});
       const {router} = this.props;
       const themeType = window.localStorage.getItem('themeType');
       if (themeType) this.setState({themeType});
       const userId = window.localStorage.getItem('userId');
       if(userId){
            if(router.pathname === '/login'){
                router.replace('/');
            }
       }else{
            if(router.pathname === '/'){
                router.replace('/login');
            }
       }
       this.setState({loading: false});
       
    }

    componentDidUpdate(prevProp, prevState){
        if (prevState.themeType !== this.state.themeType) window.localStorage.setItem('themeType', this.state.themeType);
    }
    
    render()
    {
        const { Component, pageProps, router} = this.props;
        const {themeType,loading} = this.state;
        
        return (
            <ThemeColor.Provider value={{themeType, setThemeType: type => this.setState({themeType: type}) }}>
                <Head>
                    <title>Demo App</title>
                </Head>
                <ThemeProvider theme={themeType === 'light' ? lightTheme : darkTheme}> 
                    <CssBaseline /> 
                    {
                        !loading && ((router.pathname === '/login' || router.pathname === '/register' || 
                        router.pathname === '/forgot_password')
                        ? '' : <Appbar />)
                    }
                    {
                        loading ? <LoadingCustom /> :
                        <Component {...pageProps}/>
                    }
                    
                </ThemeProvider>

            </ThemeColor.Provider>
        );
    }
}
