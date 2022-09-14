import {PaletteOptions , createTheme} from '@mui/material';


const palette: PaletteOptions = {
    mode: 'dark',
    primary: {
        main: '#bdbdbd',
        dark: '#263238',
        contrastText: '#263238'
    },
    secondary: {
        main: '#263238',
        contrastText: '#eceff1',
        light: '#e0f2f1'
    },
    background: {
        default: '#00897b'
    }
};

const theme = createTheme ({
    palette,
});

export default theme;
