import { Header } from "@/components/header";
import { policies } from "@/constants";

const Policies = () => {
  return (
    <>
      <Header title="Healthcare Policies" />
      <p className="explanationP">{policies}</p>
    </>
  );
};

export default Policies;
