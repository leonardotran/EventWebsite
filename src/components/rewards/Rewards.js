import React from "react";
import styled from "styled-components";


import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";
import { Link } from 'react-router-dom';
import { BiDonateHeart} from 'react-icons/bi';
import { GiCardPickup, GiPerspectiveDiceSixFacesRandom,  } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';

const Button = styled.button`
  border: none;
  outline: none;
  color: #000000;
  padding: 6px 1em;
  font-size: ${({ size }) => (size ? size + "px" : "18px")};
  font-weight: 600;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    background: rgb(74,35,166);
background: linear-gradient(90deg, rgba(74,35,166,0.7959558823529411) 0%, rgba(106,48,41,1) 100%); 
}

  &:focus {
    outline: none;
  }
`;
const RewardsSection = styled.div`
  padding: 0 0 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #F8F8FF;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin: 0 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const RewardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const RewardsHeading = styled.h1`

  color: #000000;
  font-size: 48px;
  margin-bottom: 24px;
  
`;

const RewardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #5EF0CB;
  background: -webkit-linear-gradient(top left, #5EF0CB, #191707);
  background: -moz-linear-gradient(top left, #5EF0CB, #191707);
  background: linear-gradient(to bottom right, #5EF0CB, #191707);  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 95rem;
  height: 600px;
  
  @media screen and (max-width: ${deviceSize.mobile}px)  {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
`;

const RewardsCard = styled(Link)`
  background: #808080;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 300px;
  height: 500px;
  text-decoration: none;
  border-radius: 4px;

  &:nth-child(2) {
    background: rgb(51,150,166);
    background: linear-gradient(130deg, rgba(51,150,166,0.7959558823529411) 0%, rgba(106,48,41,1) 100%);    
    margin: 50px;
  }
  &:nth-child(3) {
    background: #647df9;
    background: rgb(119,12,27);
    background: linear-gradient(35deg, rgba(119,12,27,1) 0%, rgba(106,48,41,1) 100%);   
    margin: 4px;
  }
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
`;

const RewardsCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  align-items: center;
  color: #fff;
`;

const RewardsCardIcon = styled.div`
  margin: 2px;
`;

const RewardsCardPlan = styled.h3`
  margin-bottom: 2px;
  font-size: 24px;
`;

const RewardsCardCost = styled.h4`
  font-size: 35px;
`;

const RewardsCardLength = styled.p`
  font-size: 15px;
  align-items: center;
  margin-bottom: 20px;
`;

const RewardsCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;

const RewardsCardFeature = styled.li`
  margin-bottom: 15px;
  align-items: center;

`;

export function Rewards(props) {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}> 
        <RewardsSection id="rewardsSection">
        <RewardsWrapper>
          <RewardsHeading>Reward Options</RewardsHeading>
          
          <RewardsContainer>
            <RewardsCard>
              <RewardsCardInfo>
                <RewardsCardIcon>
                  <GiPerspectiveDiceSixFacesRandom />
                </RewardsCardIcon>
                <RewardsCardPlan>Random</RewardsCardPlan>
                <RewardsCardCost>100 Coins</RewardsCardCost>
                <RewardsCardLength>05 per month</RewardsCardLength>
                <RewardsCardFeatures>
                  <RewardsCardFeature>You Will Get A Random Rewards </RewardsCardFeature>
                  <RewardsCardFeature>From Our Sponsors</RewardsCardFeature>
                </RewardsCardFeatures>
                <Button primary>Choose Option</Button>
              </RewardsCardInfo>
            </RewardsCard>
            <RewardsCard to='/'>
              <RewardsCardInfo>
                <RewardsCardIcon>
                  <GiCardPickup />
                </RewardsCardIcon>
                <RewardsCardPlan>Pick Yourself</RewardsCardPlan>
                <RewardsCardCost>250 Coins</RewardsCardCost>
                <RewardsCardLength>02 per month</RewardsCardLength>
                <RewardsCardFeatures>
                  <RewardsCardFeature>You Can Pick A Rewards</RewardsCardFeature>
                  <RewardsCardFeature>From Our Sponsors</RewardsCardFeature>
                </RewardsCardFeatures>
                <Button primary>Choose Option</Button>
              </RewardsCardInfo>
            </RewardsCard>
            <RewardsCard to='/'>
              <RewardsCardInfo>
                <RewardsCardIcon>
                  <BiDonateHeart />
                </RewardsCardIcon>
                <RewardsCardPlan>Better World</RewardsCardPlan>
                <RewardsCardCost>1000 Coins</RewardsCardCost>
                <RewardsCardLength>01 per month</RewardsCardLength>
                <RewardsCardFeatures>
                  <RewardsCardFeature>Donate Your Rewards For Charity</RewardsCardFeature>
                  <RewardsCardFeature>or Make Us Plant 100 Trees</RewardsCardFeature>
                </RewardsCardFeatures>
                <Button primary>Choose Option</Button>
              </RewardsCardInfo>
            </RewardsCard>
          </RewardsContainer>
        </RewardsWrapper>
      </RewardsSection>
    </IconContext.Provider>


  );
}
