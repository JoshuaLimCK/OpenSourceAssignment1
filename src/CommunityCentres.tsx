import { Header } from "./components/header";
import { communityCentre } from "./constants";

const CommunityCentres = () => {
  return (
    <>
      <Header title="Community Health Centres" />
      <p className="explanationP">{communityCentre}</p>
    </>
  );
};

export default CommunityCentres;
