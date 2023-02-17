import React, { useState, useEffect } from "react";
import Link from "next/link";
import { StyledSidebar } from "@/styles/styles";
import { AndroidIcon, IosIcon, NintendoIcon, PcIcon, PlayStationIcon, XboxIcon } from "./icons";
import styled from "styled-components";

const TopBtn = styled.div`
  position: fixed;
  padding: 10px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  background-color: rgb(124 124 129 / 30%);
  display: ${(props) => (props.show ? "flex" : "none")};
`;

const Sidebar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isBrowser = () => typeof window !== "undefined";

  const handleScroll = () => {
    return window.scrollY > 1000 ? setIsScrolled(true) : setIsScrolled(false);
  };

  useEffect(() => {
    if (!isBrowser()) return;
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <StyledSidebar>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/reviews"}>Reviews</Link>
        </li>
        {/* <li>
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
        </li> */}
        {/* <li>Top</li>
        <li>
          <ul>
            <li>Best of the year</li>
            <li>Popular in 2022</li>
            <li>All time top 250</li>
          </ul>
        </li> */}
        <li>All games</li>
        <li>
          <ul>
            <li>Platforms</li>
            <li>
              <Link href={"/pc"}>
                <div className="icon-box">
                  <PcIcon />
                </div>
                PC
              </Link>
            </li>
            <li>
              <Link href={"/playstation"}>
                <div className="icon-box">
                  <PlayStationIcon />
                </div>
                PlayStation 4
              </Link>
            </li>
            <li>
              <Link href={"/xbox"}>
                <div className="icon-box">
                  <XboxIcon />
                </div>
                Xbox One
              </Link>
            </li>
            <li>
              <Link href={"/nintendo"}>
                <div className="icon-box">
                  <NintendoIcon />
                </div>
                Nintendo Switch
              </Link>
            </li>
            <li>
              <Link href={"/ios"}>
                <div className="icon-box">
                  <IosIcon />
                </div>
                iOS
              </Link>
            </li>
            <li>
              <Link href={"/andriod"}>
                <div className="icon-box">
                  <AndroidIcon />
                </div>
                Android
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <TopBtn show={isScrolled} className="top__btn" onClick={scrollToTop}>
        TOP
      </TopBtn>
    </StyledSidebar>
  );
};

export default Sidebar;
