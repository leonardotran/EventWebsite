import React, { createContext, useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { LoginForm } from "./loginFormDemo";
import { AccountContext } from "./context";
import { SignupForm } from "./signupFormDemo";
import { MutedLink } from "./common";

const BoxContainer = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;
const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: rgb(119,204,137);
  background: linear-gradient(
        90deg, 
        rgba(119,204,137,1) 35%, 
        rgba(25,124,66,1) 65%);
`;


const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 12.5px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};


export function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState(props.initialActive);

 
  useEffect(() => {
    setActive(props.initialActive)
  }, [props])

  console.log("props", props.initialActive);
  console.log("active", active);

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
    console.log("active inside switch to signup", active);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
    console.log("active inside switch to signin", active);
  };

  

  const contextValue = { switchToSignup, switchToSignin };



  return (
    <AccountContext.Provider value={contextValue}>
      {active == "signin" ? <LoginForm /> : <SignupForm />}
      </AccountContext.Provider>
    
  );

  // return (
  //   <AccountContext.Provider value={contextValue}>
  //     <BoxContainer>
  //       <TopContainer>
  //         <BackDrop
  //           initial={false}
  //           animate={isExpanded ? "expanded" : "collapsed"}
  //           variants={backdropVariants}
  //           transition={expandingTransition}
  //         />

  //         {active === "signin" ?  
  //           (
  //             <HeaderContainer>
  //               <HeaderText>Welcome</HeaderText>
  //               <HeaderText>Back</HeaderText>
  //               <SmallText>Please sign-in to continue</SmallText>
  //             </HeaderContainer>
  //           )
  //           : 

  //           (
  //             <HeaderContainer>
  //               <HeaderText>Create</HeaderText>
  //               <HeaderText>Account</HeaderText>
  //               <SmallText>Please sign-up to continue</SmallText>
  //             </HeaderContainer>
  //           )
  //         }
  //         {/* {active === "signin" && (
  //           <HeaderContainer>
  //             <HeaderText>Welcome</HeaderText>
  //             <HeaderText>Back</HeaderText>
  //             <SmallText>Please sign-in to continue</SmallText>
  //           </HeaderContainer>
  //         )}
  //         {active === "signup" && (
  //           <HeaderContainer>
  //             <HeaderText>Create</HeaderText>
  //             <HeaderText>Account</HeaderText>
  //             <SmallText>Please sign-up to continue</SmallText>
  //           </HeaderContainer>
  //         )} */}
  //       </TopContainer>


  //       <InnerContainer>

  //         {active == "signin" ? <LoginForm /> : <SignupForm />}
  //         {/* {active === "signin" && <LoginForm />}
  //         {active === "signup" && <SignupForm />}  */}


  //       </InnerContainer>

       


  //     </BoxContainer>
  //   </AccountContext.Provider>
  // );
}

    

