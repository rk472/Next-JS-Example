import {createMuiTheme} from '@material-ui/core/styles';
import { createContext } from 'react';

export const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
    }
});

export const lightTheme = createMuiTheme({
    palette: {
        type: 'light',
    }
});

export const ThemeColor = createContext('theme-type');

