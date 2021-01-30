import React from "react";
import { useMediaQuery } from "react-responsive";
import styled, { keyframes } from "styled-components";
import { BrandLogo } from "../../components/brandLogo";
import { Button } from "../../components/button";
import { Marginer } from "../../components/marginer";
import { deviceSize } from "../../components/responsive";
import { Link } from "react-router-dom";
import MobileStoreButton from 'react-mobile-store-button';
import TopSectionBackgroundImg from "../../images/bg.jpg";
import TheBestSpecialistsImg from "../../images/theme2.png";
import { bounceInDown, fadeInLeftBig } from 'react-animations';
 
 
const BouncyDiv = styled.div`
  animation: 3s ${keyframes`${bounceInDown}`} ;
`;
const FadeIn = styled.div`
  animation: 3s ${keyframes`${fadeInLeftBig}`} ;
`;

const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
  transform:scale(1, 1);
  transition: 1s;
  &:hover {
        transform:scale(1.5, 1.5);
    }
`;
const TopSectionContainer = styled.div`
  width: 100%;
  height: 800px;
  background: url(${TopSectionBackgroundImg}) no-repeat;
  background-position: 0px -150px;
  background-size: cover;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    height: 700px;
    background-position: 0px 0px;
  }
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StandoutImage = styled.div`
  width: 44em;
  height: 34em;
  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
  }
`;

const SloganText = styled.h3`
  margin: 0;
  line-height: 1.4;
  color: #fff;
  font-weight: 800;
  font-size: 35px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 24px;
  }
`;

export function TopSection(props) {
  const { children } = props;

  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <TopSectionContainer>
      <BackgroundFilter>
        {children}
        <TopSectionInnerContainer>
          <LogoContainer>
            <BrandLogo
              logoSize={isMobile ? 40 : 65}
              textSize={isMobile ? 35 : 55}
            />
            <Marginer direction="vertical" margin={8} />
            <FadeIn>
            <SloganText>A Playground For Environment Lover </SloganText>
            </FadeIn>
            <Marginer direction="vertical" margin={15} />
            <Link to="/customer/access/signup"><Button>Join Now</Button></Link>
          </LogoContainer>
          {!isMobile && (
            <StandoutImage>
            <BouncyDiv>
                <img src={TheBestSpecialistsImg} alt="best in the field"  />
              </BouncyDiv>
            </StandoutImage>
          )}
        </TopSectionInnerContainer>
      </BackgroundFilter>
    </TopSectionContainer>
  );
}
