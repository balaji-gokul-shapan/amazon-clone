import {
  Box,
  Button,
  Input,
  styled,
  IconButton,
  Typography,
} from '@mui/material';
import { Colors } from './theme';

export const ImageCarouselContainer = styled(Box)({
  height: '300px',
  width: '100%',
//   background: Colors.success,
  display: 'flex',
});

export const CarouselSection = styled(Box)({
  // border:"1px solid black",
  display: 'flex',
//   height: '300px',
//   width: '100%',
//   background: Colors.success,
  color:Colors.black,
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.5)', // add shadow for depth effect
  display: 'flex',
  flexDirection:'column',
  alignItems: 'center',
  justifyContent: 'center',
  //   alignContent: 'center',
});
