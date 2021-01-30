import Axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../../components/button";
import { deviceSize } from "../../components/responsive";
import { EventCard } from "../../components/eventCard";

const EventContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 48px;
  color: #000;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 25px;
  }
`;

const EventWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const WarningText = styled.h3`
  color: rgba(100, 100, 100);
  font-weight: 500;
`;

const ViewMoreButton = styled(Button)`
  background-color: #f2f2f2;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
  color: #959595;
  font-size: 14px;

  &:hover {
    background-color: #f2f2f2;
    filter: contrast(0.8);
  }
`;

const wait = (num) => new Promise((rs) => setTimeout(rs, num));

export function Event(props) {
  const [offeredEvent, setEvent] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const isEventEmpty =
    !offeredEvent || (offeredEvent && offeredEvent.length === 0);

  const fetchEvent = async () => {
    setLoading(true);
    const response = await Axios.get(
      "https://atex.org/api/events" ||
      "http://localhost:7002" + "/api/events"
    ).catch((err) => {
      console.log("Error: ", err);
    });

    if (response) {
      setEvent(response.data);
    }
    

    setLoading(false);
  };

  useEffect(() => {
    fetchEvent();
  }, []);

  return (
    <EventContainer>
      <Title>Our Events</Title>
      <EventWrapper>
        {isEventEmpty && !isLoading && (
          <WarningText>No Events are published yet!</WarningText>
        )}
        {isLoading && <WarningText>Loading...</WarningText>}
        {!isEventEmpty &&
          !isLoading &&
          offeredEvent.map((service, idx) => (
            <EventCard key={idx} {...service} />
          ))}
      </EventWrapper>
      <BottomContainer>
        {!isEventEmpty && !isLoading && (
          <ViewMoreButton>View More</ViewMoreButton>
        )}
      </BottomContainer>
    </EventContainer>
  );
}
