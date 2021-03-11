import BaseLayout from "../layout/Base";
import Intro from "../components/Intro";
import Metadata from "../components/Metadata";

export default function Home() {
  return (
    <BaseLayout>
      <Metadata />
      <Intro />
    </BaseLayout>
  );
}
