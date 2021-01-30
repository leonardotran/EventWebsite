import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import app1 from "../../images/app1.png";
import app2 from "../../images/app2.png";
import app3 from "../../images/app3.png";
import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";
import icon4 from "../../images/icon4.png";
import { motion } from 'framer-motion';
import { deviceSize } from "../../components/responsive";
import { useMediaQuery } from "react-responsive";

import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  ColumnLeft,
  Image,
  ColumnRight
} from './style';

const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 30px;
  padding-left: 30px;
  align-items: center;
  @media screen and (max-width: ${deviceSize.mobile}px){
    padding-right: 30px;
    padding-left: 30px;
    align-items: center;
  }
`;

const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
  }
  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
  }
`;
export function AppDetail(props)  {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <>
    <Navbar />
    <InfoSec>
    <InfoRow imgStart= ''>
    <Container>
        <ColumnLeft>
        <TextWrapper>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Welcome to Atex
          </motion.h1>
          <motion.p
            variants={fadeLeft}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1 }}
          ><TopLine>Ready To Make An Impact?</TopLine> </motion.p>
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{
              scale: 0.95,
              backgroundColor: '#67F6E7',
              border: 'none',
              color: '#000'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
          >
            Download Our App
          </Button>
          </TextWrapper>
        </ColumnLeft>
        {!isMobile && (

        <ColumnRight>
          <Image
            src={icon4}
            alt='planet'
            whileTap={{ scale: 0.6 }}
            drag={true}
            dragConstraints={{ left: 10, right: 10, top: 10, bottom: 10 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
          <Image
            src={icon1}
            alt='planet'
            whileTap={{ scale: 0.6 }}
            drag={true}
            dragConstraints={{ left: 10, right: 10, top: 10, bottom: 10 }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
          <Image
            src={icon2}
            alt='planet'
            whileTap={{ scale: 0.6 }}
            drag={true}
            dragConstraints={{ left: 10, right: 10, top: 10, bottom: 10 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
          <Image
            src={icon3}
            alt='planet'
            whileTap={{ scale: 0.6 }}
            drag={true}
            dragConstraints={{ left: 10, right: 10, top: 10, bottom: 10 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
        </ColumnRight>
        )}
      </Container>
    
      </InfoRow>
      </InfoSec>

      <InfoSec lightBg="false">
        <Container>
          <InfoRow imgStart= ''>
            <InfoColumn>
              <TextWrapper>
                <TopLine>'Action for the Environment'</TopLine>
                <Heading>Be the Change: <br />The future is in your hands</Heading>
                <Subtitle>Create & organize any event with just some clicks</Subtitle>
                <Link to='/sign-up'>
                  <Button big fontBig primary="true">
                  Download App 
                 </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start=''>
                <Img src={app1} alt='Credit Card' />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>

      <InfoSec>
        <Container>
          <InfoRow imgStart= ''>
            <InfoColumn>
              <TextWrapper>
                <TopLine >'Tech-driven Solution for a Greener Tomorrow'</TopLine>
                <Heading lightText="false">Advancing Recycling with <br/>Artificial Intelligence</Heading>
                <Subtitle lightTextDesc="false">Upload the object and you can count on us to sort your recycling. <br /> <br /> In a rush? Try saying "Open Atex and Scan" to your voice assistant </Subtitle>
                <Link to='/sign-up'>
                  <Button big fontBig primary="false">
                  Download App 
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start=''>
                <Img src={app2} alt='Credit Card' />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>

      <InfoSec lightBg="false">
        <Container>
          <InfoRow imgStart= ''>
            <InfoColumn>
              <TextWrapper>
                <TopLine >'Earn Points When You Recycle'</TopLine>
                <Heading >Recycle + Reuse <br/>= Reward</Heading>
                <Subtitle >Redeem points for discounts and freebies from local businesses, participate in raffles, and many more options!</Subtitle>
                <Link to='/sign-up'>
                  <Button big fontBig primary="true">
                  Download App 
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start=''>
                <Img src={app3} alt='Credit Card' />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
      <Footer />
    </>

  );
}
