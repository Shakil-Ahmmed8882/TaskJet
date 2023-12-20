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


import { menuItems } from "./MenuItems";
import { NavLink, useNavigate } from "react-router-dom";
import { BsFilterRight } from "react-icons/bs";

export default function TopNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const goTo = useNavigate();

  console.log(isMenuOpen);
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth=""
      style={{ backgroundColor: "" }}>
      <NavbarContent className="relative flex md:hidden ">
        <NavbarMenuToggle
        className=" h-8"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <div className="w-11 left-0 absolute -z-10  h-6"><CiMenuFries className="w-full h-full"/></div>
      </NavbarContent>
        
      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"></NavbarContent>
      <NavbarContent justify="end">
        <div className="flex gap-1 items-center ">
          Filter
          <BsFilterRight className="text-[20px]" />
        </div>
        <NavLink
          exact
          to="/login"
          activeClassName="active"
          className="flex items-center">
          <span>Login</span>
        </NavLink>
        <NavbarItem>
          <Button
            onClick={() => goTo("/signup")}
            as={Link}
            color="primary"
            variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* This menu are the dropdown */}
      <NavbarMenu className="bg-primaryColor w-1/2 top-0">
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
              href="#"
              size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
