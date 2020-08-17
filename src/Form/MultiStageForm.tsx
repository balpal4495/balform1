import React, { useState } from "react";

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

  return (
    <>
      <StageProgress
        currentStage={stages[currentStageIndex]}
        currentStageIndex={currentStageIndex}
        stages={stages}
      />
    </>
  );
}
