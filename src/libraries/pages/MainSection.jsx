import React, { useContext, useState, useEffect, useLayoutEffect } from 'react';
import {
  AsideBrands,
  AsideTitleBar,
  IconBox,
  MainSectionAside,
  MainSectionContainer,
  MainSectionMain,
  ProductCarts,
  ProductsCartBox,
  SingleWrapper,
  StyledAnchor,
  SuccessBox,
  VerticalLine,
} from '../styles/theme/mainsection';
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import ReactStars from 'react-rating-stars-component';
import { BsFillPatchMinusFill, BsCheckLg } from 'react-icons/bs';
import { Colors } from '../styles/theme';
import LazyLoad from 'react-lazy-load';
import { SelectOptionContext, UserContext } from './Homepage';
import { Logo } from '../styles/homepage';
import InfiniteScroll from 'react-infinite-scroll-component';

export const MainSection = () => {
  const { selectedOption, setSelectedOption, inputValue } =
    useContext(SelectOptionContext);
  const data = useContext(UserContext);
  const [infoData, setInfoData] = useState(data.slice(0, 3));
  const [hasMore, setHasMore] = useState(true);
  const [debouncedInputValue, setDebouncedInputValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [priceRanges, setPriceRanges] = useState([]);
  const [ratingRanges, setRatingRanges] = useState([]);
  const [discountRanges, setDiscountRanges] = useState([]);
  const [logoName, setLogoName] = useState([]);
  const itemsPerPage = 3;

  // useEffect(() => {
  //   setInfoData(data.slice(0, itemsPerPage));
  //   setHasMore(data.length > itemsPerPage);
  // }, [data]);

  // const fetchMoreData = () => {
  //   setTimeout(() => {
  //     const currentLength = infoData.length + itemsPerPage;
  //     setInfoData(data.slice(0, currentLength));
  //     setHasMore(currentLength < data.length);

  //   }, 1000);
  // };
  // console.log(data.map((item) => item.mobile_name));

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedInputValue(inputValue);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

  const uniqueMobileNames = [
    ...new Set(data.map((option) => option.mobile_name)),
  ];
  console.log(selectedOption);

  // const handleScroll = (e) => {
  //   const element = e.target;
  //   if (element.scrollHeight - element.scrollTop === element.clientHeight) {
  //     setIsScrollbarAtBottom(true);
  //     console.log(isScrollbarAtBottom);
  //   } else {
  //     setIsScrollbarAtBottom(false);
  //   }
  // };

  const handleChange = (event) => {
    const checkboxValue = event.target.name;
    const isChecked = event.target.checked;

    setIsChecked((prevCheckedItems) => {
      if (isChecked) {
        return {
          ...prevCheckedItems,
          [checkboxValue]: isChecked,
        };
      } else {
        const { [checkboxValue]: _, ...updatedCheckedItems } = prevCheckedItems;
        return updatedCheckedItems;
      }
    });
  };

  // const PriceRanges = data.filter((item, index) => {
  //   const price = item['mobile-price'];
  //   return price >= 1000 && price <= 10000;
  // });
  // console.log(PriceRanges);
  // const handleChange = (event) => {
  //   setIsChecked((prevCheckedItems) => ({
  //     ...prevCheckedItems,
  //     [event.target.name]: event.target.checked,
  //   }));
  // };
  // console.log(Object.keys(isChecked));

  const PriceList = [
    { name: 'Under ₹2000', value: '0-2000' },
    { name: '₹2000 to ₹5000', value: '2000-5000' },
    { name: '₹5000 to ₹10000', value: '5000-10000' },
    { name: '₹10000 to ₹20000', value: '10000-20000' },
    { name: 'Over ₹20000', value: '20000-100000' },
  ];

  const Deals = [
    { name: 'All Discounts', value: '0-0.5' },
    { name: "Today's Deals", value: '0.5-1.0' },
  ];

  const BrandLogo = [
    'iPhone',
    'LG',
    'Motorola',
    'Google Pixel',
    'Huawei',
    'OnePlus',
    'Samsung Galaxy',
  ];
  const ratingChanged = (newRating) => {
    console.log(newRating);
    // console.log(data.filter((item)=> Math.round(item.mobile_rating) === newRating))
    const filteredRating = data.filter(
      (item, index) => Math.round(item.mobile_rating) === newRating
    );
    console.log(filteredRating);
    setRatingRanges(filteredRating);
  };
  console.log(ratingRanges);

  const handleImageClick = (imageName) => {
    setLogoName(imageName);
    console.log('Clicked image name:', imageName);
  };
  console.log(logoName);
  const handleClickDiscount = (value) => {
    let discountRangeVal = value.split('-');
    const filteredRangesDiscount = data.filter((item, index) => {
      const price = item.discount;
      return price >= discountRangeVal[0] && price <= discountRangeVal[1];
    });
    console.log(filteredRangesDiscount);
    setDiscountRanges(filteredRangesDiscount);
  };
  console.log(discountRanges);
  const handleClick = (value) => {
    let priceRange = value.split('-');
    console.log(priceRange);
    const filteredRanges = data.filter((item, index) => {
      const price = item['mobile-price'];
      return price >= priceRange[0] && price <= priceRange[1];
    });
    console.log('handleClick', filteredRanges);
    setPriceRanges(filteredRanges);
  };
  console.log(priceRanges);

  // const ShowPriceList = PriceList.map((priceAmount) => (
  //   <StyledAnchor
  //     style={{ textDecoration: 'none', fontSize: '15px', margin: '2px' }}
  //     key={priceAmount}
  //     href="#">
  //     {priceAmount}
  //   </StyledAnchor>
  // ));

  const ShowPriceList = PriceList.map((priceAmount) => (
    <StyledAnchor
      key={priceAmount.value}
      // href="#"
      // onClick={() => console.log(priceAmount.value)}
      onClick={() => handleClick(priceAmount.value)}>
      {priceAmount.name}
    </StyledAnchor>
  ));

  const ShowDeals = Deals.map((discount) => (
    <StyledAnchor
      key={discount.value}
      // href="#"
      onClick={() => handleClickDiscount(discount.value)}>
      {discount.name}
    </StyledAnchor>
  ));

  const selectedMobile = data.filter(
    (mobile) => mobile['mobile_name'] === selectedOption
  );
  console.log(selectedMobile);

  const selectedSearchBar = data.filter(
    (mobile) => mobile['mobile_name'] === debouncedInputValue
  );

  const selectedMobileSearchBarVal = data.filter((mobile) =>
    mobile['mobile_name']
      .toLowerCase()
      .includes(debouncedInputValue.toLowerCase())
  );
  console.log(selectedMobileSearchBarVal);
  //   const temp = Object.keys(isChecked);
  // console.log(temp.join(', '));
  // console.log(data.filter((item)=> item.mobile_name === Object.keys(isChecked).join(', ') ))
  const checkedMobile = data.filter((item) =>
    Object.keys(isChecked).some((key) => item.mobile_name === key)
  );

  console.log(isChecked);
  console.log(checkedMobile);
  // const checkBoxSelected = data.filter((mobile)=> mobile['mobile_name'] === isChecked);
  const brandCheckboxes = uniqueMobileNames.map((brandName) => (
    <FormControlLabel
      key={brandName}
      control={
        <Checkbox
          checked={isChecked[brandName] || false}
          onClick={handleChange}
          name={brandName}
          size="small"
          sx={{
            margin: '0 2px 0 1px',
            '&.Mui-checked': {
              color: Colors.border,
            },
          }}
        />
      }
      sx={{
        '& .MuiTypography-root': {
          fontSize: '15px',
          fontWeight: 'lighter',
        },
        '& .MuiSvgIcon-root': {
          fontSize: 15,
        },
      }}
      className="customLabel"
      label={brandName}
    />
  ));
  // const filteredCheckMobile = data.filter((item) => {
  //   return isChecked[item.brandName];
  // });
  // console.log(filteredCheckMobile); SearchBoxValue
  // const filteredData =
  //   selectedMobile.length > 0
  //     ? selectedMobile
  //     : priceRanges.length > 0
  //     ? priceRanges
  //     : checkedMobile.length > 0
  //     ? checkedMobile
  //     : ratingRanges.length > 0
  //     ? ratingRanges
  //     : discountRanges.length > 0
  //     ? discountRanges
  //     : selectedMobileSearchBar.length > 0
  //     ? selectedMobileSearchBar
  //     : // : selectedSearchBar.length > 0
  //       // ? selectedSearchBar
  //       // data;
  // infoData
  const filteredData =
    selectedMobile.length > 0
      ? selectedMobile
      : priceRanges.length > 0
      ? priceRanges
      : checkedMobile.length > 0
      ? checkedMobile
      : ratingRanges.length > 0
      ? ratingRanges
      : discountRanges.length > 0
      ? discountRanges
      : selectedMobileSearchBarVal.length > 0
      ? selectedMobileSearchBarVal
      : data;

  useEffect(() => {
    if (isChecked) {
      const checkedMobile = data.filter((item) =>
        Object.keys(isChecked).some((key) => item.mobile_name === key)
      );
      setInfoData(checkedMobile.slice(0, 3));
      // setInfoData(filteredData.slice(0, itemsPerPage));
      setHasMore(checkedMobile.length > itemsPerPage);
    }

    if (debouncedInputValue) {
      const selectedMobileSearchBarVal = data.filter((mobile) =>
        mobile['mobile_name']
          .toLowerCase()
          .includes(debouncedInputValue.toLowerCase())
      );
      // console.log(selectedMobileSearchBarVal);
      setInfoData(selectedMobileSearchBarVal.slice(0, 3));
      setHasMore(selectedMobileSearchBarVal.length > itemsPerPage);
    }

    if (selectedOption) {
      const selectedMobile = data.filter(
        (mobile) => mobile['mobile_name'] === selectedOption
      );
      console.log(selectedMobile);
      setInfoData(selectedMobile.slice(0, 3));
      setHasMore(selectedMobile.length > itemsPerPage);
    }

    if (priceRanges.length) {
      setInfoData(priceRanges.slice(0, 3));
      setHasMore(priceRanges.length > itemsPerPage);
    }

    if (ratingRanges.length) {
      setInfoData(ratingRanges.slice(0, 3));
      setHasMore(ratingRanges.length > itemsPerPage);
    }
    if (discountRanges.length) {
      setInfoData(discountRanges.slice(0, 3));
      setHasMore(discountRanges.length > itemsPerPage);
    }
  }, [
    isChecked,
    debouncedInputValue,
    selectedOption,
    priceRanges,
    ratingRanges,
    discountRanges,
  ]);

  const fetchMoreData = () => {
    setTimeout(() => {
      const currentLength = infoData.length + itemsPerPage;
      if (debouncedInputValue) {
      }
      // if (selectedOption) {
      // }
      // if(priceRanges){}
      // if(ratingRanges){}
      setInfoData(filteredData.slice(0, currentLength));
      setHasMore(currentLength < filteredData.length);
    }, 1000);
  };
  const ProductDataCard = infoData.map((item, index) => (
    <>
      <ProductCarts key={item.id}>
        <LazyLoad
          // placeholder={<div>Loading...</div>}
          height={'auto'}
          width={'auto'}
          style={{ background: 'black' }}
          placeholder={
            <SuccessBox style={{ color: 'black' }}>Loading...</SuccessBox>
          }>
          <img
            src={`/Images/cart-${index + 1}.jpg`}
            alt={item.title}
            style={{
              height: '300px',
              width: '200px',
              boxShadow: '0 6px 14px rgba(0, 0, 0, 0.8)',
              margin: '1px',
            }}
          />
        </LazyLoad>
        <AsideTitleBar
          variant="section"
          component={'h4'}
          sx={{ fontWeight: '350' }}>
          {item.mobile_name} | {item.specifications}
        </AsideTitleBar>
        <AsideTitleBar
          variant="section"
          component={'h6'}
          sx={{ fontWeight: '350', color: Colors.info }}>
          Visit the {item.mobile_name} Store
        </AsideTitleBar>
        <SingleWrapper>
          <AsideTitleBar
            variant="section"
            component={'h6'}
            sx={{ fontWeight: '400', margin: '7px' }}>
            {item.mobile_rating}
          </AsideTitleBar>
          <ReactStars
            count={5}
            value={item.mobile_rating}
            onClick={() => ratingChanged}
            size={22}
            activeColor="#ffd700"
          />
          <AsideTitleBar
            variant="section"
            component={'h6'}
            sx={{
              fontWeight: '400',
              fontSize: '12px',
              color: Colors.info,
              margin: '10px 0 0 2px',
            }}>
            {item['mobile-price']}+ Ratings
          </AsideTitleBar>
        </SingleWrapper>
        <AsideTitleBar
          variant="section"
          component={'h6'}
          sx={{
            fontWeight: '400',
            fontSize: '12px',
            color: Colors.info,
          }}>
          | 1000+ Answered Questions
        </AsideTitleBar>
        <VerticalLine />
        <SingleWrapper>
          <AsideTitleBar
            variant="section"
            component={'h6'}
            sx={{
              fontWeight: '400',
              fontSize: '20px',
              color: Colors.danger,
            }}>
            -{((item.discount / item['mobile-price']) * 100).toFixed(2)}%
          </AsideTitleBar>
          <AsideTitleBar
            variant="section"
            component={'h4'}
            sx={{
              fontWeight: 400,
              // fontSize: '18px',
              margin: '0px 3px 0px 11px',
              color: Colors.black,
            }}>
            <span style={{ fontSize: '15px' }}>₹ </span>
            {Math.round(item['mobile-price'] / 1000) * 1000}
            {/* {(item.discount / 100 * item['mobile-price']).toFixed(0)} */}
          </AsideTitleBar>
        </SingleWrapper>
        <AsideTitleBar
          variant="section"
          component={'h6'}
          sx={{
            fontWeight: '400',
            fontSize: '12px',
            color: Colors.dim_grey,
          }}>
          MRP: ₹ <s>{Math.round(item['mobile-price']) - 3}</s>
        </AsideTitleBar>
        <AsideTitleBar
          variant="section"
          component={'h5'}
          sx={{
            fontWeight: '400',
            fontSize: '13px',
            color: Colors.black,
          }}>
          Inclusive of all taxes <br></br>
          <b>EMI</b> starts at ₹{' '}
          {((item.discount / 100) * item['mobile-price']).toFixed(0)}. No cost
          EMI avaliable.{' '}
          <span
            style={{
              fontWeight: '600',
              fontSize: '12px',
              color: Colors.info,
            }}>
            EMI options
          </span>
        </AsideTitleBar>
        <VerticalLine />
        <SingleWrapper>
          <BsFillPatchMinusFill
            style={{ color: Colors.secondary, fontSize: '22px' }}
          />
          <AsideTitleBar
            variant="section"
            component={'h6'}
            sx={{
              fontWeight: '500',
              margin: '-1px 0px 2px 10px',
              fontSize: '18px',
              color: Colors.black,
            }}>
            Offers
          </AsideTitleBar>
          <SuccessBox sx={{ marginLeft: '5px' }}>
            <AsideTitleBar
              variant="section"
              component={'h6'}
              sx={{
                fontWeight: '500',
                margin: '-1px 5px 2px 5px',
                display: 'flex',
                flexWrap: 'wrap',
                fontSize: '12px',
                color: Colors.black,
              }}>
              Save ₹{' '}
              {((item.discount / 1000) * item['mobile-price']).toFixed(0)}
            </AsideTitleBar>
          </SuccessBox>{' '}
        </SingleWrapper>
        <SingleWrapper>
          <AsideTitleBar>
            <BsCheckLg style={{ color: Colors.secondary, fontSize: '22px' }} />
          </AsideTitleBar>
          <AsideTitleBar
            variant="section"
            component={'h6'}
            sx={{
              fontWeight: '700',
              // margin:'-1px 0px 2px 10px',
              fontSize: '15px',
              color: Colors.info,
            }}>
            Prime
          </AsideTitleBar>
          <AsideTitleBar
            variant="section"
            component={'h6'}
            sx={{
              fontWeight: '400',
              margin: '1px 0px 2px 5px',
              fontSize: '13px',
              color: Colors.black,
            }}>
            Get it by <b>Tommorrow, 4th September.</b>
            <br></br>FREE Delivery by Amazon
          </AsideTitleBar>
        </SingleWrapper>
        <AsideTitleBar
          variant="section"
          component={'h6'}
          sx={{
            fontWeight: '500',
            // margin:'-1px 0px 2px 10px',
            fontSize: '14px',
            color: Colors.info,
          }}>
          Click here
        </AsideTitleBar>
      </ProductCarts>
    </>
  ));

  // if (selectedMobile.length > 0) {
  //   console.log(data);
  // }

  // const ProductDataCard = data.map((item, index) => {
  //   if (item.mobile_name === selectedOption) {
  //     return <div style={{ color: Colors.black }}>{item.mobile_name}</div>;
  //   } else {
  //     return null;
  //   }
  // });
  return (
    <>
      <MainSectionContainer>
        <MainSectionAside>
          <AsideTitleBar
            variant="section"
            component={'h5'}
            padding={'0px 0px 10px 0px'}>
            Category
          </AsideTitleBar>

          <AsideBrands>
            <AsideTitleBar variant="section" component={'h6'}>
              Brands
            </AsideTitleBar>
            <FormControl sx={{ m: 1, color: 'black' }}>
              <FormGroup>{brandCheckboxes}</FormGroup>
            </FormControl>
          </AsideBrands>
          <AsideBrands>
            <AsideTitleBar variant="section" component={'h6'}>
              Price
            </AsideTitleBar>
            <FormControl sx={{ m: 1, color: 'black' }}>
              <FormGroup>{ShowPriceList}</FormGroup>
            </FormControl>
          </AsideBrands>

          <AsideBrands>
            <AsideTitleBar variant="section" component={'h6'}>
              Deals & Discounts
            </AsideTitleBar>
            <FormControl sx={{ m: 1, color: 'black' }}>
              <FormGroup>{ShowDeals}</FormGroup>
            </FormControl>
          </AsideBrands>

          <AsideBrands>
            <AsideTitleBar variant="section" component={'h6'}>
              Average Customer's Review
            </AsideTitleBar>
            <FormControl sx={{ m: 1, color: 'black' }}>
              {/* <FormGroup>{StarRating}</FormGroup> */}
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
              />
            </FormControl>
          </AsideBrands>
          <AsideBrands sx={{ flexDirection: 'column' }}>
            <AsideTitleBar
              variant="section"
              component={'h6'}
              sx={{ marginBottom: '10px' }}>
              Amazon Prime
            </AsideTitleBar>
            <SingleWrapper sx={{ cursor: 'pointer' }}>
              <AsideTitleBar>
                <BsCheckLg
                  style={{ color: Colors.secondary, fontSize: '22px' }}
                />
              </AsideTitleBar>
              <AsideTitleBar
                variant="section"
                component={'h6'}
                sx={{
                  fontWeight: '700',
                  // margin:'-1px 0px 2px 10px',
                  fontSize: '15px',
                  color: Colors.info,
                }}>
                Prime
              </AsideTitleBar>
            </SingleWrapper>
          </AsideBrands>

          <AsideBrands>
            <AsideTitleBar
              variant="section"
              component={'h6'}
              sx={{ marginBottom: '10px' }}>
              Top Brands
            </AsideTitleBar>
            {BrandLogo.map((name) => (
              <IconBox key={name}>
                <Logo
                  sx={{ width: '100px', height: '50px' }}
                  src={`Images/${name}-logo.png`}
                  onClick={() => handleImageClick(name)}
                />
              </IconBox>
            ))}
          </AsideBrands>
        </MainSectionAside>
        {/* <LazyLoad height={'auto'} width={'auto'} flex={5} offset={100} once> */}

        <MainSectionMain>
          <SingleWrapper>
            <AsideTitleBar variant="section" component={'h3'}>
              SmartPhones
            </AsideTitleBar>
            <span
              style={{
                fontWeight: '600',
                fontSize: '12px',
                margin: '10px 2px 9px 9px',
                color: Colors.info,
                cursor: 'pointer',
              }}>
              Show more
            </span>
          </SingleWrapper>
          <AsideTitleBar
            variant="section"
            component={'h2'}
            sx={{ marginTop: '12px' }}>
            Top Arrivals of the Month
          </AsideTitleBar>

          <InfiniteScroll
            dataLength={infoData.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4 style={{ color: 'black' }}>Loading...</h4>}>
            <ProductsCartBox>{ProductDataCard}</ProductsCartBox>
          </InfiniteScroll>
          {/* {hasMore && <SuccessBox sx={{color:'black'}}>Loading more...</SuccessBox>} */}
        </MainSectionMain>
        {/* </LazyLoad> */}
      </MainSectionContainer>
    </>
  );
};
