interface HeaderProps {
  title: string;
  subtitle?: string;
}

export const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <>
      <div className="text-center p-8">
        <h1 className="text-5xl font-bold">{title}</h1>
        {subtitle && <h2 className="text-xl">{subtitle}</h2>}
      </div>
    </>
  );
};
