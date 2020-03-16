import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { Toolbar, Button, AppBar } from "@material-ui/core";
import { IoMdStats, IoIosListBox } from "react-icons/io";

import colors from "../../configs/colors";

const NAVIGATION_LINKS = [
  {
    name: "orders",
    icon: <IoIosListBox size={20} />,
    link: "/orders"
  },
  {
    name: "Reports",
    icon: <IoMdStats size={20} />,
    link: "/reports"
  }
];

const BottomBar = () => {
  return (
    <StyledAppBar position="fixed" color="primary">
      <StyledToolbar>
        {(() => {
          return NAVIGATION_LINKS.map(link => {
            return (
              <StyledNavLink
                key={link.name}
                to={link.link}
                activeClassName="isActive"
                strict
              >
                <Button>
                  {link.icon}
                  <span>{link.name}</span>
                </Button>
              </StyledNavLink>
            );
          });
        })()}
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default BottomBar;

const StyledAppBar = styled(AppBar)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: auto;
  background-color: #fff;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: center;
`;

const StyledNavLink = styled(NavLink)`
  margin-right: 10px;
  color: #333;
  text-decoration: none;

  span {
    margin-left: 5px;
  }

  &.isActive,
  &.isActive svg,
  &.isActive span {
    color: ${colors.primary};
  }
`;
