import React, { useContext, createContext } from 'react';
import {
  Logo,
  SeacrhBarSection,
  SearchBar,
  SearchIconWrapper,
  SectionText,
  SectionTextWrapper,
  StyledButtons,
} from '../styles/homepage';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  TextField,
  colors,
} from '@mui/material';
import theme, { Colors } from '../styles/theme';
import { FlagIcon } from 'react-flag-kit';
import { BsSearch, BsCartCheckFill } from 'react-icons/bs';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Autocomplete,
} from '@mui/material';
import { SelectOptionContext, UserContext } from './Homepage';

export const Header = () => {
  const CartData = useContext(UserContext);
  const { selectedOption, setSelectedOption, inputValue, setInputValue } =
    useContext(SelectOptionContext);

  // console.log(selectedOption)
  // console.log(CartData.map((data)=>data.mobile_name));
  const uniqueMobileNames = [
    ...new Set(CartData.map((option) => option.mobile_name)),
  ];
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleClickText = (e, value) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };
  React.useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  return (
    <>
      <AppBar position="static" sx={{ paddingLeft: '0px' }}>
        <Toolbar sx={{ justifyContent: 'space-around', paddingLeft: '0px' }}>
          <Logo src="Images/amazon-logo.png" />
          <SectionTextWrapper>
            <Typography variant="sectiontext" sx={{ color: Colors.light }}>
              Delivering to Chennai 600008
            </Typography>
            <Typography
              variant="body"
              component={'h5'}
              sx={{ fontWeight: 700 }}>
              Sign in to Update your Location
            </Typography>
          </SectionTextWrapper>

          <SearchBar>
            <SeacrhBarSection row="true">
              <FormControl sx={{ width: '200px' }}>
                <InputLabel id="dropdown-label">All Catogories</InputLabel>
                <Select
                  labelId="dropdown-label"
                  id="dropdown"
                  value={selectedOption}

                  onChange={handleChange}>
                  {uniqueMobileNames.map((mobile_name, index) => (
                    <MenuItem key={index} value={mobile_name}>
                      {mobile_name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {/* <Autocomplete
                disablePortal
                placeholder="Search Amazon.in."
                options={uniqueMobileNames}
                onChange={handleClickText}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} />}
              /> */}
              <InputBase
                placeholder="Search Amazon.in."
                value={inputValue}
                onChange={handleClickText}
                // disableRipple
                sx={{ flexGrow: '1', paddingLeft: '12px' }}
              />
              {/* <Autocomplete
                freeSolo
                options={uniqueMobileNames}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Search Amazon.in."
                    value={inputValue}
                    variant="standard"
                    // onChange={(e) => setInputValue(e.target.value)}
                    onChange={(e) => {
                      setInputValue(e.target.value);
                      console.log(e.target.value); // Add this line to log the value in the console
                    }}
                    sx={{ flexGrow: '1', paddingLeft: '12px',  backgroundColor: 'transparent',
                    border: 'none',
                    boxShadow: 'none',
                  width:'200px' }}
                  />
                )}
              /> */}
              <SearchIconWrapper>
                <BsSearch
                  style={{ fontSize: '20px' }}
                  onClick={(e) => handleClickText}
                />
              </SearchIconWrapper>
            </SeacrhBarSection>
          </SearchBar>
          <SectionTextWrapper sx={{ flexDirection: 'row' }}>
            <FlagIcon code="IN" size={25} />
            <Typography
              variant="body"
              component={'h5'}
              sx={{ fontWeight: 700, marginLeft: '6px' }}>
              EN
            </Typography>
          </SectionTextWrapper>
          <SectionTextWrapper>
            <Typography variant="sectiontext" sx={{ color: Colors.white }}>
              Hello, Sign in
            </Typography>
            <Typography
              variant="body"
              component={'h2'}
              sx={{ fontWeight: 700 }}>
              Accounts & Lists
            </Typography>
          </SectionTextWrapper>
          <SectionTextWrapper>
            <Typography variant="sectiontext" sx={{ color: Colors.white }}>
              Returns
            </Typography>
            <Typography
              variant="body"
              component={'h2'}
              sx={{ fontWeight: 700 }}>
              & Orders
            </Typography>
          </SectionTextWrapper>
          <SectionTextWrapper sx={{ flexDirection: 'row' }}>
            <BsCartCheckFill />
            <Typography
              variant="h6"
              component={'h1'}
              sx={{
                fontWeight: 700,
                marginLeft: '6px',
                color: Colors.white,
              }}>
              Cart
            </Typography>
            <Typography
              variant="h5"
              component={'h1'}
              sx={{
                fontWeight: 700,
                marginLeft: '6px',
                color: Colors.secondary,
              }}>
              0
            </Typography>
          </SectionTextWrapper>
        </Toolbar>
      </AppBar>
    </>
  );
};
