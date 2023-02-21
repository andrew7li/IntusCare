import { useEffect, useState } from "react";
// import "./App.scss";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { IParticipant } from "../types/IParticipant";
import Header from "./Header";
import ListOfParticipants from "./ListOfParticipants";
import ParticipantCard from "./ParticipantCard";
import ParticipantHeader from "./ParticipantHeader";

// /**
//  * Function to get the participant ID. Since the ID is not provided in the API,
//  * I decided to use the first name and last name as the ID.
//  * @param participant the participant
//  * @returns the participant ID that is used for the Router
//  */
// function getParticipantID(participant: IParticipant) {
//   return participant.firstName + participant.lastName;
// }

function Participants() {
  // State variables
  const [sortParticipantOrder, setSortParticipantOrder] = useState<
    "ascending" | "descending"
  >("ascending");
  const [sortICDCodesOrder, setSortICDCodesOrder] = useState<
    "ascending" | "descending"
  >("descending");

  return (
    <>
      <Header />
      <h2 className="participants-header">Participants</h2>
      <Container className="participants-container">
        <ParticipantHeader
          sortParticipantOrder={sortParticipantOrder}
          setSortParticipantOrder={setSortParticipantOrder}
          sortICDCodesOrder={sortICDCodesOrder}
          setSortICDCodesOrder={setSortICDCodesOrder}
        />
        <hr />
        <ListOfParticipants
          sortParticipantOrder={sortParticipantOrder}
          sortICDCodesOrder={sortICDCodesOrder}
        />
        {/* Empty row for spacing */}
        <Row />
      </Container>
    </>
  );
}

export default Participants;
