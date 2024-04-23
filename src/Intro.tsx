import { Header } from "@/components/header";
import { importance, introduction } from "@/constants";
import { CardWrapper } from "./components/card-wrapper";

const Introduction = () => {
  return (
    <>
      <Header title="Introduction to Healthcare" />
      <article className="px-20 py-4 text-center">
        <p className="explanationP">{introduction}</p>
      </article>
      <CardWrapper>
        <Header title="Why is it important?" />
        <p className="explanationP">{importance}</p>
      </CardWrapper>
    </>
  );
};

export default Introduction;
