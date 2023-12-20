import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { CiMenuFries } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../../Components/Navbar/Logo";
import { menuItems } from "./MenuItems";

export default function TopNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const goTo = useNavigate();

  return (
    <Navbar maxWidth="full" onMenuOpenChange={setIsMenuOpen} style={{ backgroundColor: "" }}>
      <Logo />
      <NavbarContent className="relative  flex md:hidden">
        <NavbarMenuToggle
          className="h-8 absolute right-0"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <div className="w-11 -right-3 absolute -z-10 h-6">
          {isMenuOpen ? (
            <div className="w-full h-full">Close</div>
          ) : (
            <CiMenuFries className="w-full h-full" />
          )}
        </div>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center"></NavbarContent>
      
      <NavbarContent justify="end" className="hidden md:flex">
        {menuItems.map((item, index) => (
          <NavLink
            key={`${item.label}-${index}`}
            exact
            to={item.path}
            activeClassName="active"
            className="flex items-center"
          >
            <span>{item.label}</span>
          </NavLink>
        ))}
        <NavbarItem>
          <Button

            onClick={() => goTo("/signup")}
            as={Link}
            className="mr-[23px]"
            color="primary"
            variant="flat"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* This menu is the dropdown */}
      <NavbarMenu className="bg-[#80808037] w-1/2 top-16">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <NavLink
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              to={item.path}
              size="lg"
            >
              {item.label}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}