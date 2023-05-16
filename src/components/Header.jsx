import React from "react";
import { Logo, HeaderWrapper, IconWrapper } from "@/styles/styles";
import { MenuIcon } from "./icons";
import styled from "styled-components";
import { SearchComponent } from ".";

const WithMediaQuery = styled(IconWrapper)`
  @media (min-width: 1000px){
    display: none;
  }
`

const Header = ({ setShowSidebar }) => {
  const handleClick = () => {
    setShowSidebar((prev) => !prev);
  };
  return (
    <HeaderWrapper>
      <Logo href="/">AG<span className="mobile-hidden">-All games!</span></Logo>
      <SearchComponent/>
      <WithMediaQuery onClick={handleClick}>
        <MenuIcon />
      </WithMediaQuery>
    </HeaderWrapper>
  );
};

export default Header;
