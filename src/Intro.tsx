import { Header } from "@/components/header";
import { importance, introduction } from "@/constants";

const Introduction = () => {
  return (
    <>
      <Header title="Introduction to Healthcare" />
      <p className="explanationP">{introduction}</p>
      <Header title="Why is it important?" />
      <p className="explanationP">{importance}</p>
    </>
  );
};

export default Introduction;
