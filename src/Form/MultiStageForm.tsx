import React, { useState, useCallback } from "react";
import classnames from "classnames";
import { User } from "./Pages/User";
import { Privacy } from "./Pages/Privacy";
import { Done } from "./Pages/Done";
import { FormData } from "../Shared/types";

import "./MultiStageForm.scss";
interface ProgressProps {
  stages: string[];
  currentStage: string;
  currentStageIndex: number;
}

// This file could be broken out into its own self contained component
// but its also small enough to stay here until it starts to get more complex
// it can also work as a mechanism to go navigate the form with extended validation aspects
function StageProgress(props: ProgressProps) {
  const { currentStage, stages } = props;

  return (
    <>
      <div className="multistageform-progress">
        {stages.map((stage, i) => (
          <div
            className={classnames("multistageform-progress__heading", {
              "multistageform-progress__heading--active":
                currentStage === stage,
            })}
            key={i}
          >
            {stage}
          </div>
        ))}
      </div>
    </>
  );
}
export function MultiStageForm() {
  // There should not be more stages than form pages, should put some form of defending this
  const stages: string[] = ["User", "Privacy", "Done"];

  const [currentStageIndex, setIndex] = useState<number>(0);
  const [formData, setFormData] = useState<FormData | {}>({});

  const onSubmitCallback = useCallback(
    (data: FormData) => {
      setFormData((formData: FormData) => ({
        ...formData,
        [data.section]: data,
      }));

      // These feel like magic numbers, but they're kto accomodate arrays starting from 0
      if (currentStageIndex + 1 === stages.length - 1) {

        // have structured the data in this way purely for demo purposes
        // an array would probably make more sense in a real word scenario (esp with graphql)
        const dataToSend = { ...formData, [data.section]: data };
        console.log("dataToSend", dataToSend);
      }
      setIndex(currentStageIndex + 1);
    },
    [currentStageIndex, formData, stages.length]
  );

  // formPages should match whats in the stages array
  const formPages = [
    <User onSubmit={onSubmitCallback} />,
    <Privacy onSubmit={onSubmitCallback} />,
    <Done />,
  ];

  return (
    <>
      <div className="multistageform">
        <StageProgress
          currentStage={stages[currentStageIndex]}
          currentStageIndex={currentStageIndex}
          stages={stages}
        />
      </div>
      <div>{formPages[currentStageIndex]}</div>
    </>
  );
}
