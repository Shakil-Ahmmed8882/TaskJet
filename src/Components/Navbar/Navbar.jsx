import React from "react";
import {
  Navbar,
  NavbarContent,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { CiMenuFries } from "react-icons/ci";


import { menuItems } from "./MenuItems";
import { BsFilterRight } from "react-icons/bs";

export default function TopNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth=""
      style={{ backgroundColor: "" }}>
      <NavbarContent className="relative  flex md:hidden ">
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
     
      </NavbarContent>
      

      {/* This menu are the dropdown */}
      <NavbarMenu className="bg-primaryColor w-1/2 top-16">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
            to={item.path}
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              size="lg">
              {item.label}
            
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
