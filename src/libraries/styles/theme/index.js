import { createTheme } from '@mui/material';
const breakpoints = {
  values: {
    xs: 0,
    sm: 0, // Phone
    md: 768, // Tablet/Laptop
    lg: 1500, // Desktop
    xl: 2000,
  },
};
export const Colors = {
  primary: '#131921',
  secondary: '#FEBD69',
  success: '#9CE69E',
  info: '#146EB4',
  danger: '#FF5722',
  warning: '#FFC107',
  dark: '#232F3E',
  light: '#aaa',
  muted: '#E3E6E6',
  border: '#CF5500',
  inverse: '#2F3D4A',
  shaft: '#333',
  ///////////////
  // Grays
  ///////////////
  dim_grey: '#696969',
  dove_gray: '#e8e8e8',
  body_bg: '#f3f6f9',
  light_gray: 'rgb(230,230,230)',
  ///////////////
  // Solid Color
  ///////////////
  white: '#fff',
  black: '#000',
};

// const theme = createTheme({
  const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
  typography: {
    // fontFamily: 'Noto Sans Georgian',
    // fontFamily: 'Amazon Ember, sans-serif',
    fontFamily: 'Amazon Ember, Amazon Ember Cd RC, Amazon Ember Display, Amazon Ember Duospace, Amazon Ember Mono, Amazon Ember V2, sans-serif',
    fontSize: 16,
    h4: {
      fontSize: 26,
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
      '@media (min-width:300px)': {
        fontSize: '2.7rem',
      },
      '@media (max-width:1200px)': {
        fontSize: '1.5rem',
      },
    },
    h5: {
      fontSize: 25,
      color: 'black',
      '@media (min-width:1200px)': {
        fontSize: '1.5rem',

      },
    },
    h1: {
      fontSize: 28,
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
      '@media (min-width:300px)': {
        fontSize: '2.7rem',
      },
      '@media (max-width:1200px)': {
        fontSize: '1.5rem',
      },
    },
    h2: {
      fontSize: 28,
      Color: Colors.shaft,
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
      '@media (min-width:300px)': {
        fontSize: '2.7rem',
      },
      '@media (max-width:1200px)': {
        fontSize: '1.5rem',
      },
    },
    h6: {
      fontSize: 20,
      color: Colors.white,
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
      '@media (min-width:300px)': {
        fontSize: '1.2rem',
      },
      '@media (max-width:1200px)': {
        fontSize: '0.8rem',
      },
    },
    sectiontext:{
        fontSize:12,
        lineHeight: 0.9,
        // wordSpacing: '10px',
        color:Colors.white,
        fontWeight:500,
        '@media (min-width:600px)': {
            fontSize: '0.5rem',
          },
          '@media (min-width:300px)': {
            fontSize: '0.8rem',
          },
          '@media (max-width:1200px)': {
            fontSize: '1.8rem',
          },
    },
    body: {
      fontSize: 22,
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
      '@media (min-width:300px)': {
        fontSize: '0.9rem',
      },
      '@media (max-width:1200px)': {
        fontSize: '0.5rem',
      },
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
  },
});

export default theme;
