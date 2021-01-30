import React, {useContext} from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Button } from "../button";
import { Marginer } from "../marginer";
import { AccountContext } from "../accountBox/context";
import { Link } from "react-router-dom";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";
import {useSelector} from 'react-redux'; 
import { logout } from '../../store/actions/auth'
import {useDispatch} from 'react-redux'
// Hoan
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
// Hoan
const NavbarContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5em;

  background-color: ${({ useTransparent }) =>
    useTransparent ? "transparent" : "#264653"};
`;

const AccessibilityContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const AnchorLink = styled(Link)`
  font-size: 12px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;

  &:hover {
    filter: contrast(0.6);
  }
`;

const Seperator = styled.div`
  min-height: 35%;
  width: 1px;
  background-color: #fff;
`;

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(0),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));



export function Navbar(props) {
 
  const dispatch = useDispatch()

  const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn)
  const stat = useSelector(state => state.authReducer)
  
  const { useTransparent } = props;
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
// HOan
  const classes = useStyles();
//Hoan

  const logoutUser = () => {
     dispatch(logout())
     console.log("state", stat); 
  }

  const gotoReward = (e) => {
    console.log("gotoReward");
    document.getElementById('rewardsSection').scrollIntoView() 
  }
  
  console.log("state", stat); 
  console.log("logged", isLoggedIn);

  return (
    <NavbarContainer useTransparent={useTransparent}>
      <BrandLogo />
      <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search events"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
      </div>
      <AccessibilityContainer>
        <AnchorLink onClick={gotoReward}>Rewards</AnchorLink>
        <Marginer direction="horizontal" margin={10} />
        <Seperator />
        <Marginer direction="horizontal" margin={10} />
        <AnchorLink to="/customer/event"> Events</AnchorLink>
        <Marginer direction="horizontal" margin={10} />
        <Seperator />
        <Marginer direction="horizontal" margin={10} />
        {!isMobile && <AnchorLink >Specialists Portal</AnchorLink>}
        {!isMobile && <Marginer direction="horizontal" margin={8} />}
        {!isMobile && <Seperator />}
        
        {isLoggedIn === false ? (
          <>
          <Marginer direction="horizontal" margin={10} />
          <Link  to="/customer/access/signup" ><p style={{ 'font-size': '12px',
                                                          'color': '#fff'}}>Register</p></Link>
          <Marginer direction="horizontal" margin={8} />
          <Link to="/customer/access/signin" ><p style={{ 'font-size': '12px',
                                                          'color': '#fff'}}>Login</p></Link>
          </>
        ):(
          <>
          <Marginer direction="horizontal" margin={10} />
          <Link to="/customer/profile/12" ><p style={{ 'font-size': '12px',
                                                          'color': '#fff'}}>HoanPham@gmail.com </p></Link>
          <p onClick={logoutUser} style={{ 'font-size': '12px',
                                                          'color': '#fff',
                                                          'cursor' : 'pointer'
                                                          }}>Logout</p>
          </>
        )
        }
        {/* <Marginer direction="horizontal" margin={10} />
        <Link to="/customer/access/signup" >Register</Link>
        <Marginer direction="horizontal" margin={8} />
        <Link to="/customer/access/signin" >Login</Link> */}
      </AccessibilityContainer>
    </NavbarContainer>
  );
}
