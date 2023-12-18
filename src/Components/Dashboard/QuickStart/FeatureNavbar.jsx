import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
} from "@nextui-org/react";

import { NavLink, useNavigate } from "react-router-dom";
import { BsFilterRight } from "react-icons/bs";

export default function FeaturedNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const goTo = useNavigate();

  console.log(isMenuOpen);
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth=""
      className="relative"
      style={{ backgroundColor: "" }}>
    

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
          <span>route</span>
        </NavLink>
        <NavbarItem>
          <Button
            onClick={() => goTo("/signup")}
            as={Link}
            color="red"
            variant="flat">
            Add some routed
          </Button>
        </NavbarItem>
      </NavbarContent>

      
    </Navbar>
  );
}
