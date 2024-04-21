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
import { navbarItems } from "./navbar";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";

export function SideNav() {
  return (
    <nav className="md:hidden p-4">
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
            <div>
              <a
                href={item.path}
                key={key}
                className={navigationMenuTriggerStyle()}
              >
                {item.name}
              </a>
            </div>
          ))}
          {/* <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
        </SheetContent>
      </Sheet>
    </nav>
  );
}
