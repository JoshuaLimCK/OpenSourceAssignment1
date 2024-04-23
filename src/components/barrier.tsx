import { Header } from "./header";

interface BarrierProps {
  href: string;
  title: string;
  content: string;
}

export const Barrier = ({ href, title, content }: BarrierProps) => {
  return (
    <>
      <section className="flex">
        <div>
          <img src={href} alt={title} />
        </div>
        <div>
          <h3>{title}</h3>
          <p className="explanationP">{content}</p>
        </div>
      </section>
    </>
  );
};
