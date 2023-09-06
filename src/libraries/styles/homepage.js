import { Box, Button, styled, IconButton, } from '@mui/material';
import { Colors } from './theme';

export const PageContainer = styled(Box)({
  background: Colors.body_bg,
  minHeight: '100vh',
  height: 'auto',
  width: '100%',
  display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: 'white',
});

export const PageHeader = styled(Box)({
  // background: Colors.primary,
  width: '100%',
  // height: '65px',
  display: 'flex',
  flexDirection: 'column',
  color: Colors.black,
});

export const Logo = styled('img')(({ src }) => ({
  //  src: `url(${src})`,
  // src: src,
  // backgroundImage: `url(${src})`,
  backgroundRepeat: 'no-repeat',
  width: '100px',
  height: '45px',
  marginTop: '15px',
  cursor: 'pointer',
  transform: 'scale(1.0)',
  transition: '.6s ease-in-out',
  '&:hover': {},
}));

export const SearchBar = styled(IconButton)({
  background: Colors.white,
  color: Colors.black,
  padding:'0px',
  height:'40px',
  borderRadius: '4px',
  '&:hover': {
    background: Colors.white,
  },
})

export const SeacrhBarSection  = styled(Box)({
    display:'flex',
    flexDirection:'row',
    alignItems: 'center',
});
export const SearchIconWrapper  = styled(Box)({
    backgroundColor: Colors.secondary,
    borderRadius: '0 4px 4px 0',
    padding: '4px',
    height:'auto',
    width:'35px',
    marginLeft: 'auto',
})
export const StyledButtons = styled(Button)({
  background: Colors.secondary,
  '&:hover': {
    background: Colors.white,
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)', // add shadow for depth effect
  },
})

export const SectionTextWrapper = styled(Box)({
display:'flex',
flexDirection:'column'

})