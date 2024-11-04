import { NavbarSlots, SlotsToClasses } from "@nextui-org/react";

export const headerNavbarClassNames: SlotsToClasses<NavbarSlots> = {
  item: [
    "h-full",
    "relative",
    "flex",
    "items-center",
    "font-[600]",
    "data-[active=true]:after:content-['']",
    "data-[active=true]:after:mb-[8px]",
    "data-[active=true]:after:absolute",
    "data-[active=true]:after:bottom-0",
    "data-[active=true]:after:left-[-4px]",
    "data-[active=true]:after:right-[-4px]",
    "data-[active=true]:after:h-[4px]",
    "data-[active=true]:after:rounded-[2px]",
    "data-[active=true]:after:bg-primary-red",
  ],
  wrapper: "max-w-full",
  content: "hidden sm:flex gap-16",
};
