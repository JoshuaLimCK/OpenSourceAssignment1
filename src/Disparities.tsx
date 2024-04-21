import { Header } from "@/components/header";
import { disparities } from "@/constants";

const Disparities = () => {
  return (
    <>
      <Header title="Healthcare Disparities" />
      <p className="explanationP">{disparities}</p>
    </>
  );
};

export default Disparities;
