import React, { useState, createContext } from 'react';
import { PageContainer, PageHeader } from '../styles/homepage';
import { Header } from './Header';
import { Navbar } from './Navbar';
import { ImageCarousel } from './ImageCarousel';
import Data from '../data/MOCK_DATA .json';
import { MainSection } from './MainSection';
export const UserContext = createContext();
export const SelectOptionContext = createContext();
export const Homepage = () => {
  const CartData = Data;
  const [selectedOption, setSelectedOption] = useState('');
  const [inputValue, setInputValue] = useState('')
  return (
    <>
    <UserContext.Provider value={CartData}>
      <SelectOptionContext.Provider value={{ selectedOption, setSelectedOption, inputValue, setInputValue }}>
      <PageContainer>
        <PageHeader>
          <Header  />
          <Navbar />
        </PageHeader>
        <ImageCarousel />
        <MainSection />
      </PageContainer>
      </SelectOptionContext.Provider>
      </UserContext.Provider>
    </>
  );
};
