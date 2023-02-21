import { useEffect, useState } from "react";
// import "./App.scss";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { IParticipant } from "../types/IParticipant";
import Header from "./Header";
import ParticipantCard from "./ParticipantCard";

/**
 * Function to get the participant ID. Since the ID is not provided in the API,
 * I decided to use the first name and last name as the ID.
 * @param participant the participant
 * @returns the participant ID that is used for the Router
 */
function getParticipantID(participant: IParticipant) {
  return participant.firstName + participant.lastName;
}

function Participants() {
  // State variables
  const [participants, setParticipants] = useState<IParticipant[]>([]);
  const [sortParticipantOrder, setSortParticipantOrder] = useState<
    "ascending" | "descending"
  >("ascending");
  const [sortICDCodesOrder, setSortICDCodesOrder] = useState<
    "ascending" | "descending"
  >("descending");
  const [sortedParticipants, setSortedParticipants] = useState<IParticipant[]>(
    []
  );

  // useEffect tp fetch data from API
  useEffect(() => {
    fetch("http://localhost:8000/participants")
      .then((response) => response.json())
      .then((data) => setParticipants(data));
  }, []);

  // useEffect for sorting participants
  useEffect(() => {
    // console.log("THIS USE EFFECT IS RUNNING!");
    // console.log(sortParticipantOrder);
    // console.log(sortICDCodesOrder);
    if (sortICDCodesOrder === "ascending") {
      if (sortParticipantOrder === "ascending") {
        setSortedParticipants(
          participants.sort((a, b) => {
            if (a.diagnoses.length > b.diagnoses.length) {
              return 1;
            }
            if (a.diagnoses.length < b.diagnoses.length) {
              return -1;
            }
            if (a.firstName > b.firstName) {
              return 1;
            }
            if (a.firstName < b.firstName) {
              return -1;
            }
            return 0;
          })
        );
      } else {
        setSortedParticipants(
          participants.sort((a, b) => {
            if (a.diagnoses.length > b.diagnoses.length) {
              return 1;
            }
            if (a.diagnoses.length < b.diagnoses.length) {
              return -1;
            }
            if (a.firstName > b.firstName) {
              return -1;
            }
            if (a.firstName < b.firstName) {
              return 1;
            }
            return 0;
          })
        );
      }
    }
    if (sortICDCodesOrder === "descending") {
      if (sortParticipantOrder === "ascending") {
        setSortedParticipants(
          participants.sort((a, b) => {
            if (a.diagnoses.length > b.diagnoses.length) {
              return -1;
            }
            if (a.diagnoses.length < b.diagnoses.length) {
              return 1;
            }
            if (a.firstName > b.firstName) {
              return 1;
            }
            if (a.firstName < b.firstName) {
              return -1;
            }
            return 0;
          })
        );
      } else {
        setSortedParticipants(
          participants.sort((a, b) => {
            if (a.diagnoses.length > b.diagnoses.length) {
              return -1;
            }
            if (a.diagnoses.length < b.diagnoses.length) {
              return 1;
            }
            if (a.firstName > b.firstName) {
              return -1;
            }
            if (a.firstName < b.firstName) {
              return 1;
            }
            return 0;
          })
        );
      }
    }
  }, [sortParticipantOrder, sortICDCodesOrder, participants]);

  /**
   * Handler for sorting participants
   */
  const handleParticipantsSortClick = () => {
    if (sortParticipantOrder === "descending") {
      setSortParticipantOrder("ascending");
    } else {
      setSortParticipantOrder("descending");
    }
  };

  /**
   * Handler for sorting ICD codes
   */
  const handleICDCodesSortClick = () => {
    if (sortICDCodesOrder === "descending") {
      setSortICDCodesOrder("ascending");
    } else {
      setSortICDCodesOrder("descending");
    }
  };

  return (
    <>
      <Header />
      <h2 className="participants-header">Participants</h2>
      <Container className="participants-container">
        <Row>
          <Col xs={8} className="d-flex align-items-center p-3 gap-2">
            <p className="participants-column-headers ps-4">Participant Name</p>
            {sortParticipantOrder === "ascending" ? (
              <img
                src="/orderFilter_Up.png"
                alt="Drop up"
                onClick={handleParticipantsSortClick}
              />
            ) : (
              <img
                src="/orderFilter_Down.png"
                alt="Drop down"
                onClick={handleParticipantsSortClick}
              />
            )}
          </Col>
          <Col xs={4} className="d-flex align-items-center py-3 px-0 gap-2">
            <p className="participants-column-headers">ICD Codes</p>
            {sortICDCodesOrder === "ascending" ? (
              <img
                src="/orderFilter_Up.png"
                alt="Drop up"
                onClick={handleICDCodesSortClick}
              />
            ) : (
              <img
                src="/orderFilter_Down.png"
                alt="Drop down"
                onClick={handleICDCodesSortClick}
              />
            )}
          </Col>
        </Row>
        <hr />

        {sortedParticipants.length === 0 ? (
          <p className="mb-3">No participants found!</p>
        ) : (
          sortedParticipants.map((participant) => (
            <ParticipantCard
              participant={participant}
              key={getParticipantID(participant)}
            />
          ))
        )}
        {/* Empty row for spacing */}
        <Row />
      </Container>
    </>
  );
}

export default Participants;
