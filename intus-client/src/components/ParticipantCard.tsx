import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { IParticipant } from "../types/IParticipant";

interface IParticipantCardProps {
  participant: IParticipant;
}
/**
 * Function to get the participant ID. Since the ID is not provided in the API,
 * I decided to use the first name and last name as the ID.
 * @param participant the participant
 * @returns the participant ID that is used for the Router
 */
function getParticipantID(participant: IParticipant) {
  return participant.firstName + participant.lastName;
}

export default function ParticipantCard(props: IParticipantCardProps) {
  const { participant: participant } = props;
  return (
    <Link
      to={`/participant/${getParticipantID(participant)}`}
      key={getParticipantID(participant)}
    >
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
    </Link>
  );
}
