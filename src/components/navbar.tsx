"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const navbarItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Introduction", path: "/introduction" },
  { name: "Barriers", path: "/barriers" },
  { name: "Disparities", path: "/disparities" },
  { name: "Policies", path: "/policies" },
  { name: "Community Centres", path: "/communityCentres" },
];

export function Navbar() {
  return (
    <NavigationMenu className="px-12 py-4 hidden lg:block ">
      <NavigationMenuList>
        {navbarItems.map((item, key) => (
          <NavigationMenuItem key={key}>
            <NavigationMenuLink
              href={item.path}
              className={navigationMenuTriggerStyle()}
            >
              <p className="text-xl">{item.name}</p>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
