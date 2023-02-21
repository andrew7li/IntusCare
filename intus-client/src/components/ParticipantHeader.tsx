import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

interface IParticipantHeaderProps {
  sortParticipantOrder: string;
  setSortParticipantOrder: React.Dispatch<
    React.SetStateAction<"ascending" | "descending">
  >;
  sortICDCodesOrder: string;
  setSortICDCodesOrder: React.Dispatch<
    React.SetStateAction<"ascending" | "descending">
  >;
}

export default function ParticipantHeader(props: IParticipantHeaderProps) {
  // Destructure props
  const {
    sortParticipantOrder,
    setSortParticipantOrder,
    sortICDCodesOrder,
    setSortICDCodesOrder,
  } = props;

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
  );
}
