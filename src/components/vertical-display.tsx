import { DisplayProps } from "@/components/horizontal-display";

export const VerticalDisplay = ({ title, content, image }: DisplayProps) => {
  return (
    <section className=" p-4">
      <div className="h-[200px] flex justify-center items-center ">
        <img
          src={image}
          alt={title}
          className="h-[200px] object-cover rounded-md"
        />
      </div>
      <div className="p-4 flex flex-col justify-center ">
        <h2 className="font-bold text-4xl p-2 text-center">{title}</h2>
        <p className="p-2 ">{content}</p>
      </div>
    </section>
  );
};
