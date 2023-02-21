import Card from "react-bootstrap/Card";

import { IParticipant } from "../types/IParticipant";

interface IParticipantDiagnosesCardProps {
  participant: IParticipant | undefined;
}

export default function ParticipantDiagnosesCard(
  props: IParticipantDiagnosesCardProps
) {
  const { participant: participant } = props;

  return (
    <div className="diagnoses-scrollable">
      {participant?.diagnoses.map((diagnosis, idx) => {
        return (
          <Card className="diagnosis-card mb-3" key={idx}>
            <Card.Body>{diagnosis.icdCode}</Card.Body>.
          </Card>
        );
      })}
    </div>
  );
}
