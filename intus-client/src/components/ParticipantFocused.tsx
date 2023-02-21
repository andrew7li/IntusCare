import React from "react";
import { useParams } from "react-router-dom";

export default function Participant() {
  const { id } = useParams();

  return (
    <div>
      <h1>Participant {id}</h1>
    </div>
  );
}
