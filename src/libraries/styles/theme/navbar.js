import { Box, styled } from '@mui/material';
import { Colors } from '.';
import { Link } from 'react-router-dom';

export const NavHeader = styled(Box)({
  background: Colors.body_bg,
  height: 'auto',
  width: '100%',
  display: 'flex',
  fontSize: 'calc(10px + 2vmin)',
  color: 'white',
});

export const NavBar = styled(Box)({
  width: '100%',
  height: '40px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  background: Colors.dark,
});

export const NavLink = styled(Link)({
  textDecoration: 'none',
  // transform: 'scale(2.1)',
  color: Colors.white,
  textAlign: 'center',
  fontWeight: 500,
  lineHeight: '20px',
  fontSize: '15px',
  '&:hover': {
    textDecoration: 'underline',
    border: '1px solid grey',
    padding: '6px',
    // transform: 'scale(1.1)',
  },
});
