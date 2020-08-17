import React, { useState } from "react";
import { User } from "./Pages/User";
import { Privacy } from "./Pages/Privacy";
import { Done } from "./Pages/Done";

interface ProgressProps {
  stages: string[];
  currentStage: string;
  currentStageIndex: number;
}

function StageProgress(props: ProgressProps) {
  const { currentStage, stages } = props;

  return (
    <>
      <div>
        {stages.map((s, i) => (
          <div key={i}>
            {s}
            {s === currentStage && "*"}
          </div>
        ))}
      </div>
    </>
  );
}
export function MultiStageForm() {
  const stages: string[] = ["User", "Privacy", "Done"];

  const [currentStageIndex, setIndex] = useState<number>(0);

  const components = [<User />, <Privacy />, <Done />];

  return (
    <>
      <div>
        <StageProgress
          currentStage={stages[currentStageIndex]}
          currentStageIndex={currentStageIndex}
          stages={stages}
        />
      </div>
      {components[currentStageIndex]}
    </>
  );
}
