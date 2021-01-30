import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/pageContainer";
import Profile from "./Profile";
import ProfileDetails from "./ProfileDetails";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import styled from "styled-components";

import { deviceSize } from "../../components/responsive";


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const TopSectionContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: 0px 150px;
  background-size: cover;
  background: rgb(119, 204, 137);
  background: linear-gradient(
    90deg,
    rgba(119, 204, 137, 1) 35%,
    rgba(124, 103, 25, 1) 65%
  );
  @media screen and (max-width: ${deviceSize.mobile}px) {
    height: 700px;
    background-position: 0px 0px;
  }
`;

export function CustomerProfile(props) {
  const classes = useStyles();

  return (
    <TopSectionContainer>
    <PageContainer className={classes.root} title="Account">
        <Navbar useTransparent />
      <InnerPageContainer>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
              <Profile />
            </Grid>
            <Grid item lg={8} md={6} xs={12}>
              <ProfileDetails />
            </Grid>
          </Grid>
        </Container>
      </InnerPageContainer>
    </PageContainer>
    </TopSectionContainer>
  );
}
