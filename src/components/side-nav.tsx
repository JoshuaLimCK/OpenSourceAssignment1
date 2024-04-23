import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navbarItems } from "@/components/navbar";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

export function SideNav() {
  return (
    <nav className="lg:hidden p-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">☰</Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription>Navigate to your desired page</SheetDescription>
          </SheetHeader>
          {navbarItems.map((item, key) => (
            <div className="py-2">
              <a
                href={item.path}
                key={key}
                className={navigationMenuTriggerStyle()}
              >
                <p className="text-xl">{item.name}</p>
              </a>
            </div>
          ))}
        </SheetContent>
      </Sheet>
    </nav>
  );
}
