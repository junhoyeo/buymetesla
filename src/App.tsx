import React from 'react';
import MobileSizedView from 'react-mobile-sized-view';
import styled from 'styled-components';

import logoImage from './assets/logo.svg';
import carImage from './assets/car.png';

function App() {
  return (
    <MobileSizedView
      backgroundColor="#DEE7EC"
      screenBackgroundColor="#F0F4F8"
      screenLightShadow="-31px -31px 62px #ffffff"
      screenDarkShadow="31px 31px 62px #bdc4c9"
    >
      <Container>
        <Header>
          <LogoImage src={logoImage} />
          <HeaderRightContent>
            <Title>테슬라 주식 예측</Title>
            <TickerSymbol>NASDAQ: TSLA</TickerSymbol>
          </HeaderRightContent>
        </Header>
        <CarImage src={carImage} />
      </Container>
    </MobileSizedView>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  padding: 40px;
  padding-bottom: 20px;
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-weight: 900;
`;

const HeaderRightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Title = styled.h1`
  font-size: 16px;
  color: #060606;
`;

const TickerSymbol = styled.span`
  font-weight: 300;
  font-size: 14.5px;
  line-height: 1.45;
  color: #9A9DA1;
`;

const LogoImage = styled.img`
  height: 18px;
`;

const CarImage = styled.img`
  height: 256px;
`;
