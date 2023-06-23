import React, { useState, useEffect, useContext } from "react";
import TrainingCard from "../Components/TrainingCard";
import TrainingsScroller from "../Components/TrainingsScroller";

export default function () {

  const LIMIT_SIZE = 8;

  const createDef = (trainings) => {
    return(
      trainings.map((training) => (
        <TrainingCard training={training} />
      ))
    );
  }

  return (
    <>
      <TrainingsScroller limit={LIMIT_SIZE} def={createDef}/>
    </>
  );
}
