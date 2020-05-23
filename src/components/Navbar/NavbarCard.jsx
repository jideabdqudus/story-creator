import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import styles from "./NavbarCard.module.css";

const NavbarCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={styles.spacing}>
      <Navbar color="primary" light expand="md">
        <NavbarBrand href="/">Story-Creator</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/stories">Stories</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/dashboard">Dashboard</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                target="__blank"
                href="https://github.com/jideabdqudus/story-creator"
              >
                Github
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <a target="__blank" href="https://abdulqudus.com">
              Developer
            </a>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarCard;
