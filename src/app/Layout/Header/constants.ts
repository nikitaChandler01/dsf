import { NavbarSlots, SlotsToClasses } from "@nextui-org/react";

export const headerNavbarClassNames: SlotsToClasses<NavbarSlots> = {
  item: [
    "h-full",
    "relative",
    "flex",
    "items-center",
    "font-[600]",

    "after:origin-[0_50%]",
    "after:transition-transform",
    "after:duration-[300ms]",
    "after:animation-fill-mode-[forwards]",
    "after:scale-x-0",
    "data-[active=true]:after:scale-x-100",
    "data-[active=false]:after:scale-x-0",

    "data-[active=true]:after:content-['']",
    "data-[active=true]:after:mb-[8px]",
    "data-[active=true]:after:absolute",
    "data-[active=true]:after:bottom-0",
    "data-[active=true]:after:left-[-4px]",
    "data-[active=true]:after:right-[-4px]",
    "data-[active=true]:after:h-[4px]",
    "data-[active=true]:after:bg-primary-red",
  ],
  wrapper: "max-w-full",
  content: "hidden sm:flex gap-16",
};
