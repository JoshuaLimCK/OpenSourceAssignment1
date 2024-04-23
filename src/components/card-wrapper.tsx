import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface WrapperProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  link?: string;
}
export const CardWrapper = ({
  children,
  title,
  subtitle,
  link,
}: WrapperProps) => {
  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <Card
      className={`mx-12 my-4 ${
        link ? "hover:shadow-xl hover:cursor-pointer transition-all" : ""
      }`}
      onClick={() => {
        link && openInNewTab(link);
      }}
    >
      {title && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {subtitle && <CardDescription>{subtitle}</CardDescription>}
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
    </Card>
  );
};
