import styled from 'styled-components';
import { motion } from 'framer-motion';
import { deviceSize } from "../../components/responsive";

export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
  
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
`;


export const Image = styled(motion.img)`
  position: absolute;
  width: 200px;
  height: 100px;
  max-width: 240px;
  max-height: 200px;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
  }
`;

export const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;
  h1 {
    margin-bottom: 0.5rem;
    font-size: 12;
  }
  p {
    margin: 2rem 0;
    font-size: 20px;
    line-height: 1.1;
  }
`;


export const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  ${Image}:nth-child(1) {
    top: 1px;
    right: 40px;
  }
  ${Image}:nth-child(2) {
    top: -500px;
    right: 40px;
  }
  ${Image}:nth-child(3) {
    top: -180px;
    right: 40px;
  }
  ${Image}:nth-child(4) {
    top: -340px;
    right: 40px;
  }
`;

export const Img = styled.img`
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

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
`;

export const Subtitle = styled.p`
  max-width: 530px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
`;