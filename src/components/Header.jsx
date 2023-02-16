import React from "react";
import { Logo, HeaderWrapper } from "@/styles/styles";

const Header = () => {

  return (
    <HeaderWrapper>
      <Logo>RAWG-clone</Logo>
      <input type="text" placeholder="Search " />
    </HeaderWrapper>
  );
};

export default Header;
