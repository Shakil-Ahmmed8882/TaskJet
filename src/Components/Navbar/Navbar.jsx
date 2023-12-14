import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import Logo from "./Logo";
import { menuItems } from "./MenuItems";
import { NavLink, useNavigate } from "react-router-dom";
export default function TopNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const goTo = useNavigate()

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}
    maxWidth="full"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavLink
          exact
          to="/"
          activeClassName="active"
          className="flex items-center">
          <span>Home</span>
        </NavLink>

      
      </NavbarContent>
      <NavbarContent justify="end">
      <NavLink
          exact
          to="/login"
          activeClassName="active"
          className="flex items-center">
          <span>Login</span>
        </NavLink>
        <NavbarItem>
          <Button onClick={()=> goTo('/signup')} as={Link} color="primary" variant="flat">
            Sign Up
          </Button>
            
        </NavbarItem>
      </NavbarContent>

      {/* This menu are the dropdown */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
