export interface DisplayProps {
  title: string;
  content: string;
  image: string;
}

export const HorizontalDisplay = ({ title, content, image }: DisplayProps) => {
  return (
    <section className="lg:flex p-4">
      <div className="p-4 h-[200px] lg:w-[500px] lg:min-w-[400px] lg:h-auto  flex justify-center items-center">
        <img
          src={image}
          alt={title}
          className="h-[200px] lg:w-[500px] object-cover rounded-md"
        />
      </div>
      <div className="p-4 flex flex-col justify-center text-center sm:text-start">
        <h2 className="font-bold text-4xl p-2">{title}</h2>
        <p className="p-2">{content}</p>
      </div>
    </section>
  );
};
