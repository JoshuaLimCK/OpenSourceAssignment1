import { Header } from "@/components/header";
import { barriers } from "@/constants";

const Barriers = () => {
  return (
    <>
      <Header title="Barriers to Healthcare" />
      <p className="explanationP">{barriers}</p>
    </>
  );
};

export default Barriers;
