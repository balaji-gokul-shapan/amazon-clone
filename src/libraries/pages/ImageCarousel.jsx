import React from 'react';
import {
  CarouselSection,
  ImageCarouselContainer,
} from '../styles/imagecarousel';
import { Typography } from '@mui/material';
import { Logo, StyledButtons } from '../styles/homepage';
import { Bs5Circle } from 'react-icons/bs';
export const ImageCarousel = () => {
  return (
    <>
      <ImageCarouselContainer>
        <CarouselSection>
          <Logo
            src="Images/banner-1.jpg"
            sx={{ marginTop: '0', width: '1301px', height: '300px', opacity:'0.9', objectFit:'fill' }}
          />
          <Typography
            variant="section"
            component={'h1'}
            style={{
              position: 'absolute',
              top: '30%',
              left: '40%',
              color: 'white',
              transform: 'translate(-50%, -50%)',
            }}>
            Introducing Galaxy M435 <Bs5Circle fontSize={34} />G
          </Typography>
          <section
            variant="section"
            style={{
              position: 'absolute',
              top: '40%',
              left: '40%',
              fontWeight:500,
              color: 'white',
              transform: 'translate(-50%, -50%)',
            }}>
            Own now at ₹5,320/Month
          </section>
          <StyledButtons
            variant="section"
            component={'h6'}
            style={{
              position: 'absolute',
              top: '50%',
              left: '40%',
              color: 'black',
              transform: 'translate(-50%, -50%)',
            }}>
            BOOK NOW
          </StyledButtons>
          {/* <Typography
          variant="h5"
          component={'h1'}
          sx={{
            fontWeight: 700,
            marginLeft: '6px',

            // color: Colors.secondary,
          }}>
          Starting from ₹79..!
        </Typography> */}
        </CarouselSection>
      </ImageCarouselContainer>
    </>
  );
};
