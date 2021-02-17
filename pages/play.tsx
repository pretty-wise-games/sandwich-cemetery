import Metadata from "../components/Metadata";
import story from "../assets/story.json";
import { ReactElement, useState } from "react";
import styled from "styled-components";

const StageTitle = styled.h1`
  font-size: 3rem;
  font-weight: normal;
  text-align: center;
`;

const StageText = styled.p`
  font-size: 1rem;
`;

const ActionList = styled.ul`
  list-style: none;
  padding-left: 0;
  align-self: flex-start;
  background: white;
`;

const Action = styled.li`
  input {
    border: none;
    font-family: inherit;
    padding: 0 1rem;
    text-align: center;
  }
  a {
    text-decoration: underline;
  }
`;

const Scene = styled.article`
  min-height: 100vh;
  max-width: 70vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  const [currentStageData, setCurrentStageData] = useState(story[0]);
  const [magicPhrase, setMagicPhrase] = useState<string>("");

  function loadStage(stageId) {
    setCurrentStageData(story.find((stage) => stage.id === stageId));
  }

  function getActionItem(action: {
    type: string;
    label: string;
    linksTo?: string;
    saveInputAs?: string;
  }): ReactElement | string {
    if (action.type === "link") {
      return (
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            loadStage(action.linksTo);
          }}
        >
          {action.label}
        </a>
      );
    } else if (action.type === "input") {
      return (
        <input
          type="text"
          placeholder={action.label}
          value={magicPhrase}
          onChange={(e) => {
            setMagicPhrase(e.currentTarget.value);
          }}
        ></input>
        
      );
    }
  }

  return (
    <>
      <Metadata />
      <Scene>
        <StageTitle>{currentStageData.title.pl}</StageTitle>

        <StageText>{currentStageData.text.pl}</StageText>

        {currentStageData.actions.length > 0 && (
          <ActionList>
            {currentStageData.actions.map((action, index) => (
              <Action key={index}>{getActionItem(action)}</Action>
            ))}
          </ActionList>
        )}
      </Scene>
    </>
  );
}
