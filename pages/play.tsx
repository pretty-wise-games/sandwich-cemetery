import { ReactElement } from "react";
import Metadata from "../components/Metadata";
import Play from "../components/Play/Play";

export default function Home(): ReactElement {
  return (
    <>
      <Metadata />
      <Play />
    </>
  );
}
