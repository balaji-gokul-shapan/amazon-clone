import { Box, styled, Typography, FormControlLabel } from '@mui/material';
import { Colors } from '.';

const commonStyles = {
  display: 'flex',
  border: '1px solid grey',
  padding: '20px',
  height: 'auto',
  width: 'auto',
  // width: `calc(auto + 15px)`,
  background: Colors.white,
};

export const MainSectionContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  height: 'auto',
  width: 'auto',
  background: Colors.muted,
});

export const MainSectionAside = styled(Box)({
  ...commonStyles,
  flex: 1,
  // border: '1px 1px 1px 0 solid grey',
  flexDirection: 'column',
});

export const MainSectionMain = styled(Box)({
  ...commonStyles,
  flex: 6,
  borderLeft: '0',
  flexDirection: 'column',
});

export const AsideBrands = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  margin: '5px',
});

export const AsideTitleBar = styled(Typography)({
  fontWeight: 700,
  color: 'black',
});

export const FormLabelText = styled(FormControlLabel)({
  variant: 'section',
  fontSize: '2px',
  // component:'h6',
  // fontWeight:700,
  color: 'black',
});

export const StyledAnchor = styled(Box)({
  color: Colors.black,
  cursor:'pointer',
  textDecoration: 'none',
  fontSize: '15px',
  margin: '2px',
  '&:hover': {
    color: Colors.border,
    fontWeight:400
  },
});

export const ProductsCartBox = styled(Box)({
  width: '100%',
  height: 'auto',
  // display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)', // adjust the number of columns as needed
  background: Colors.light_gray,
  margin: '20px 0px',
  // opacity: 0.3
});

export const ProductCarts = styled(Box)({
  // display: 'grid',
  // gridTemplateColumns: 'repeat(3, 1fr)', // adjust the number of columns as needed
  gap: '5px', // adjust the gap size as needed
  background: Colors.white,
  margin: 10,
  color: Colors.black,
  padding: '50px', // add padding to create space within each card
  borderRadius: '8px', // add border radius for rounded corners
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // add shadow for depth effect
  display: 'flex', // set display to flex
  flexDirection: 'column',
  justifyContent: 'space-between', // distribute cards evenly along the main axis
});
export const SingleWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  // margin:'1px'
});
export const VerticalLine = styled(Box)({
  border: `0.031rem solid ${Colors.dim_grey}`,
  opacity: 0.8,
});

export const SuccessBox = styled(Box)({
  width: 'auto',
  height: '25px',
  display: 'flex',
  alignItems: 'center',
  background: Colors.success,
  color: Colors.black,
});
export const IconBox = styled(Box)({
    display:'flex',
    flexDirection:'column',
    height:'70px',
    margin:'10px',
    background: Colors.light_gray,
    alignItems:'center',
    alignContent:'center'
})