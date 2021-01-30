import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 300px;
  min-height: 250px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
  margin: 0.5em;
  margin-bottom: 1.3em;
`;

const TopContainer = styled.div`
  width: 100%;
`;

const ServiceThumbnail = styled.div`
  width: 100%;
  height: 11em;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  padding: 15px 14px;
`;

const BottomContainer = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(15, 15, 15, 0.19);
  padding: 0 10px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 0;
  font-weight: 500;
  color: #000;
  text-align: start;
`;

const EventName = styled.h4`
  margin: 0;
  color: rgba(151, 151, 151, 1);
  font-size: 12px;
  font-weight: 400;
`;

const RatingContainer = styled.div`
  display: flex;
  color: #ffd700;
`;

const LocationContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RateText = styled.div`
  margin-left: 3px;
  color: #2ba679;
  font-weight: 700;
`;

const StartingAtText = styled.h6`
  margin: 0;
  font-size: 13px;
  color: #000000;
  font-weight: 400;
  word-spacing: 2;
  align-items: center;
  margin: 2px;
`;

function formatDate(string){
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(string).toLocaleDateString([],options);
}

export function EventCard(props) {
  const {
    _id,
    title,
    thumbnailUrl,
    eventname,
    rating,
    date_time,
    location,
  } = props;
  let eventDetailUrl = "./customer/eventDetail/" + _id;
  let date = formatDate(date_time);
  return (
    <CardContainer>
      <TopContainer>
        <ServiceThumbnail>
          <a
            href={eventDetailUrl}
            onClick={() => {
              this.handleClick();
            }}
          >
            <img src={thumbnailUrl} alt={title} />
          </a>
        </ServiceThumbnail>
      </TopContainer>
      <ContentContainer>
        <Title>{title}</Title>
        <Marginer direction="vertical" margin={10} />
        <EventName>Finished on: {date}</EventName>
      </ContentContainer>
      <BottomContainer>
        <RatingContainer>
          <FontAwesomeIcon icon={faStar} size="sm" />
          {rating}
          <StartingAtText>{eventname}</StartingAtText>
        </RatingContainer>
        <LocationContainer>
          <StartingAtText>{location.address}</StartingAtText>
          <RateText></RateText>
        </LocationContainer>
      </BottomContainer>
    </CardContainer>
  );
}
