import React, { useEffect, useState } from "react";
import { IParticipant } from "../types/IParticipant";
import ParticipantCard from "./ParticipantCard";

interface IListOfParticipantsProps {
  sortParticipantOrder: string;
  sortICDCodesOrder: string;
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

export default function ListOfParticipants(props: IListOfParticipantsProps) {
  // Destructure props
  const { sortParticipantOrder, sortICDCodesOrder } = props;

  // State variables
  const [participants, setParticipants] = useState<IParticipant[]>([]);
  const [sortedParticipants, setSortedParticipants] = useState<IParticipant[]>(
    []
  );

  // useEffect to fetch data from API
  useEffect(() => {
    fetch("http://localhost:8000/participants")
      .then((response) => response.json())
      .then((data) => setParticipants(data));
  }, []);

  // useEffect for sorting participants
  useEffect(() => {
    // Make a copy of the participants array to change the reference and trigger a re-render
    const participantsCopy = [...participants];
    if (sortICDCodesOrder === "ascending") {
      if (sortParticipantOrder === "ascending") {
        setSortedParticipants(
          participantsCopy.sort((a, b) => {
            if (a.diagnoses.length > b.diagnoses.length) {
              return 1;
            } else if (a.diagnoses.length < b.diagnoses.length) {
              return -1;
            } else {
              if (a.firstName > b.firstName) {
                return 1;
              } else if (a.firstName < b.firstName) {
                return -1;
              }
              return 0;
            }
          })
        );
      } else {
        setSortedParticipants(
          participantsCopy.sort((a, b) => {
            if (a.diagnoses.length > b.diagnoses.length) {
              return 1;
            } else if (a.diagnoses.length < b.diagnoses.length) {
              return -1;
            } else {
              if (a.firstName > b.firstName) {
                return -1;
              } else if (a.firstName < b.firstName) {
                return 1;
              }
              return 0;
            }
          })
        );
      }
    }
    if (sortICDCodesOrder === "descending") {
      if (sortParticipantOrder === "ascending") {
        setSortedParticipants(
          participantsCopy.sort((a, b) => {
            if (a.diagnoses.length > b.diagnoses.length) {
              return -1;
            } else if (a.diagnoses.length < b.diagnoses.length) {
              return 1;
            } else {
              if (a.firstName > b.firstName) {
                return 1;
              } else if (a.firstName < b.firstName) {
                return -1;
              }
              return 0;
            }
          })
        );
      } else {
        setSortedParticipants(
          participantsCopy.sort((a, b) => {
            if (a.diagnoses.length > b.diagnoses.length) {
              return -1;
            } else if (a.diagnoses.length < b.diagnoses.length) {
              return 1;
            } else {
              if (a.firstName > b.firstName) {
                return -1;
              } else if (a.firstName < b.firstName) {
                return 1;
              }
              return 0;
            }
          })
        );
      }
    }
  }, [sortParticipantOrder, sortICDCodesOrder, participants]);

  return (
    <>
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
    </>
  );
}
