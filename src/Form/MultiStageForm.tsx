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

function StageProgress(props: ProgressProps) {
  const { currentStage, stages } = props;

  return (
    <>
      <div className="multistageform-progress">
        {stages.map((s, i) => (
          <div
            className={classnames("multistageform-progress__heading", {
              "multistageform-progress__heading--active": currentStage === s,
            })}
            key={i}
          >
            {s}
          </div>
        ))}
      </div>
    </>
  );
}
export function MultiStageForm() {
  const stages: string[] = ["User", "Privacy", "Done"];

  const [currentStageIndex, setIndex] = useState<number>(0);
  const [formData, setFormData] = useState<FormData | {}>({});

  const onSubmitCallback = useCallback(
    (data: FormData) => {
      setFormData((formData: FormData) => ({
        ...formData,
        [data.section]: data,
      }));

      if (currentStageIndex + 1 === stages.length - 1) {
        const dataToSend = { ...formData, [data.section]: data };
        console.log("dataToSend", dataToSend);
      }
      setIndex(currentStageIndex + 1);
    },
    [currentStageIndex, formData, stages.length]
  );

  const components = [
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
      <div>{components[currentStageIndex]}</div>
    </>
  );
}
