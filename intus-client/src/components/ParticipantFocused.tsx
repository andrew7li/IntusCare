import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link, useParams } from "react-router-dom";
import { IParticipant } from "../types/IParticipant";
import Header from "./Header";
import ParticipantDiagnosesCard from "./ParticipantDiagnosesCard";

export default function Participant() {
  // Get the participant ID from the URL
  const { id } = useParams<{ id: string }>();

  // State variable
  const [participant, setParticipant] = useState<IParticipant>();

  // useEffect to fetch the participant
  useEffect(() => {
    fetch(`http://localhost:8000/participants/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setParticipant(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Header />
      <Link to="/">
        <Button className="back-button">Back</Button>
      </Link>
      <Container className="participants-container mb-3">
        <h2 className="diagnosis-participant-name">
          {participant?.firstName} {participant?.lastName}
        </h2>
        <hr className="diagnosis-hr" />
        <p className="diagnosis-title">
          ICD Codes ({participant?.diagnoses.length})
        </p>
        <ParticipantDiagnosesCard participant={participant} />
        <Row />
      </Container>
    </div>
  );
}
