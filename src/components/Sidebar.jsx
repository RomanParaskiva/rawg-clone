import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledSidebar = styled.aside`
  position:sticky;
  top: 0;
  height: max-content;
`

const Sidebar = () => {
  return (
    <StyledSidebar>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/"}>Reviews</Link>
        </li>
        <li>
          <ul>
            <li>Wishlist</li>
            <li>My Library</li>
            <li>People you follow</li>
          </ul>
        </li>
        <li>New Releases</li>
        <li>
          <ul>
            <li>Last 30 days</li>
            <li>This week</li>
            <li>Next week</li>
            <li>Release calendar</li>
          </ul>
        </li>
        <li>Top</li>
        <li>
          <ul>
            <li>Best of the year</li>
            <li>Popular in 2022</li>
            <li>All time top 250</li>
          </ul>
        </li>
        <li>All games</li>
        <li>
          Platforms
          <ul>
            <li>PC</li>
            <li>PlayStation 4</li>
            <li>Xbox One</li>
            <li>Nintendo Switch</li>
            <li>iOS</li>
            <li>Android</li>
          </ul>
        </li>
      </ul>
    </StyledSidebar>
  );
};

export default Sidebar;
