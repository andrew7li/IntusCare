import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

// Types for participants JSON
interface IDiagnosis {
  icdCode: string;
  timestamp: string;
}
interface IParticipant {
  dateOfBirth: string;
  diagnoses: IDiagnosis[];
  firstName: string;
  gender: string;
  lastName: string;
  patientNotes: string;
  phoneNumber: number;
}

const tempParticipants = [
  {
    dateOfBirth: "1990-01-01",
    firstName: "John",
    gender: "",
    diagnoses: [
      {
        icdCode: "A00",
        timestamp: "2021-01-01",
      },
      {
        icdCode: "A01",
        timestamp: "2021-01-01",
      },
    ],
    lastName: "Doe",
    patientNotes: "",
    phoneNumber: 123456789,
  },
  {
    dateOfBirth: "1990-01-01",
    firstName: "Amazing",
    gender: "",
    diagnoses: [
      {
        icdCode: "A00",
        timestamp: "2021-01-01",
      },
    ],
    lastName: "Doe",
    patientNotes: "",
    phoneNumber: 123456789,
  },
  {
    dateOfBirth: "1990-01-01",
    firstName: "Zorro",
    gender: "",
    diagnoses: [
      {
        icdCode: "A00",
        timestamp: "2021-01-01",
      },
    ],
    lastName: "Doe",
    patientNotes: "",
    phoneNumber: 123456789,
  },
];

function App() {
  // State variables
  const [participants, setParticipants] =
    useState<IParticipant[]>(tempParticipants);
  // const [participants, setParticipants] = useState<IParticipant[]>([]);
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
  // useEffect(() => {
  //   fetch("http://localhost:8000/participants")
  //     .then((response) => response.json())
  //     .then((data) => setParticipants(data));
  // }, []);

  // useEffect for sorting participants
  useEffect(() => {
    console.log("sortParticipantOrder", sortParticipantOrder);
    console.log("sortICDCodesOrder", sortICDCodesOrder);
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
    console.log("sortedParticipants", sortedParticipants);
  }, [sortParticipantOrder, sortICDCodesOrder, participants]);

  console.log(participants);

  // Handler for sorting participants
  const handleParticipantsSortClick = () => {
    if (sortParticipantOrder === "descending") {
      setSortParticipantOrder("ascending");
    } else {
      setSortParticipantOrder("descending");
    }
  };

  // Handler for sorting ICD codes
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
            <p className="participants-column-headers">Participant Name</p>
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
        {sortedParticipants.map((participant) => (
          <Card className="participant-card mb-3 mx-4">
            <Card.Body>
              <Row>
                <Col xs={8} className="participant-name">
                  {participant.firstName} {participant.lastName}
                </Col>
                <Col xs={4} className="icd-code">
                  {participant.diagnoses.length}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
        {/* Empty row for spacing */}
        <Row />
      </Container>
    </>
  );
}

export default App;
