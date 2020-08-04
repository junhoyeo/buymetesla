import React, { useEffect, useState, useRef } from 'react';
import MobileSizedView from 'react-mobile-sized-view';
import styled from 'styled-components';

import Card from './components/Card';
import LineChart from './components/LineChart';

import logoImage from './assets/logo.svg';
import carImage from './assets/car.png';

function App() {
  const contentWrapperRef = useRef(null);
  const [contentWrapperWidth, setContentWrapperWidth] = useState<number>(0);

  useEffect(() => {
    const updateWidth = () => {
      const element: any = contentWrapperRef.current;
      if (element) {
        setContentWrapperWidth(element.offsetWidth);
      }
    };

    updateWidth();

    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

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
        <ContentWrapper
          ref={contentWrapperRef}
        >
          <SectionTitle>
            주식 대신 다른 걸 한다면...
          </SectionTitle>
          <CardContainer>
            <Card field="2020년 최저임금으로" value={1245} unit="일" />
            <Card field="몬스터 에너지가" value={42778} unit="캔" />
            <Card field="연애를" value={0} unit="회" initialValue={-1000} />
          </CardContainer>
          <SectionTitle
            style={{ marginTop: 30 }}
          >
            주가 예측
          </SectionTitle>
          <LineChart
            width={contentWrapperWidth}
            height={200}
          />
        </ContentWrapper>
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
  margin: 0 auto;
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

const ContentWrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  margin-top: 20px;
  font-weight: bold;
  letter-spacing: -1px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  line-height: 1.45;
  margin-bottom: 10px;
  color: #060606;
`;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
`;
