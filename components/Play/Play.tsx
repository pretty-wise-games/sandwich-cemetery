import { ReactElement, useState } from "react";
import story from "../../assets/story.json";
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
  width: 100%;
`;

const Action = styled.li`
  input {
    border: none;
    font-family: inherit;
    display: block;
    border: 3px solid pink;
    font-size: 0.8rem;
    margin: 0 auto;
  }
  label {
    font-size: 0.8rem;
    margin: 1rem 0;
    display: block;
    text-align: center;
  }
  a {
    display: block;
    text-decoration: underline;
    text-align: center;
    margin-top: 2rem;
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

const Play = (): ReactElement => {
  const [currentStageData, setCurrentStageData] = useState(story[0]);
  const [magicPhrase, setMagicPhrase] = useState<string>("");

  function loadStage(stageId: string): void {
    setCurrentStageData(story.find((stage) => stage.id === stageId));
  }

  function getActionItem(action: {
    type: string;
    label: string;
    linksTo?: string;
    saveInputAs?: string;
  }): ReactElement {
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
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="textInput">{action.label}</label>
          <input
            id="textInput"
            type="text"
            value={magicPhrase}
            onChange={(e) => {
              setMagicPhrase(e.currentTarget.value);
            }}
          ></input>
        </form>
      );
    }
  }

  return (
    <>
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
};

export default Play;
