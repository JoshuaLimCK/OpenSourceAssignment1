interface GridViewProps {
  children: React.ReactNode;
}

export const GridView = ({ children }: GridViewProps) => {
  return <section className="lg:grid grid-cols-2">{children}</section>;
};
