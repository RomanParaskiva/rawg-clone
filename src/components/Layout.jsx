import React from "react";
import { Header, Sidebar } from "@/components";
import styled from "styled-components";

const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px;
  justify-content: center;
  width: 100%;
  height: inherit;
`;

const StyledPage = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: auto;
  align-items: center;
  padding:0 20px;
`;

const Layout = ({ children }) => {
  return (
    <StyledPage>
      <Header />
      <ContentWrapper>
        <Sidebar />
        {children}
      </ContentWrapper>
    </StyledPage>
  );
};

export default Layout;
