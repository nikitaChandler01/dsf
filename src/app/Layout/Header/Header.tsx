import Logotype from "@assets/Logotype";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { headerNavbarClassNames } from "./constants";
import "./Header.scss";

const Header = () => {
  const menuItems = ["Гараж", "Обслужить", "Настройки"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  return (
    <header className="layout__header">
      <Navbar
        shouldHideOnScroll
        className="layout__header-navbar"
        classNames={headerNavbarClassNames}
        position="sticky"
        isBlurred
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarBrand>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <Logotype width={64} height={64} />
        </NavbarBrand>
        <NavbarContent justify="center">
          <NavbarItem isActive={pathname === "/garage"}>
            <Link to="/garage">Гараж</Link>
          </NavbarItem>
          <NavbarItem isActive={pathname === "/maintenance"}>
            <Link to="/maintenance">Обслужить</Link>
          </NavbarItem>
          <NavbarItem isActive={pathname === "/settings"}>
            <Link to="/settings">Настройки</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              radius="full"
              className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
              isIconOnly
            >
              <Person4OutlinedIcon />
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                to="/"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </header>
  );
};

export default Header;
