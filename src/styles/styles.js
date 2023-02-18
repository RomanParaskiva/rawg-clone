import styled from "styled-components";

export const Heading_h1 = styled.h1`
  font-size: 72px;
  line-height: 74px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1920px;
  height: 100%;
`;

export const GameGrid = styled.div`
  & .infinite-scroll-component {
    display: grid;
    grid-template-columns: repeat(${(props) => props.columns}, minmax(300px, 1fr));
    gap: 0 20px;
    padding: 20px 0 100px;
    height: max-content;

    @media (max-width: 1440px) {
      grid-template-columns: repeat(${(props) => props.columns}, minmax(300px, 1fr));
    }

    @media (max-width: 1150px) {
      grid-template-columns: repeat(${(props) => props.columns}, minmax(300px, 1fr));
    }

    @media (max-width: 800px) {
      grid-template-columns: repeat(${(props) => props.columns}, minmax(300px, 1fr));
    }
  }
`;

export const PageSubtitle = styled.span`
  font-size: 20px;
  margin-bottom: 50px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: ${props => props.column ? "column" : "row"};
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px 0;
  align-items: ${props => props.column ? "start" : "center"};
`;

export const StyledCard = styled.div`
  position: relative;  
  width: 100%;
  height: max-content;
  border-radius: 12px;
  overflow: hidden;
  background-color: rgb(45 45 45 / 56%);
  padding: 10px;
  margin-bottom: 20px;
  & > .card__image {
    height: 150px;
    background-image: url(${(props) => props.backgroundImage});
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }

    & h3 {
      font-size: 36px;
      font-family: system-ui;
    }
  }
`;

export const GenreSpan = styled.span`
  padding: 5px;
  color: #31fd31;
  border: 1px solid;
  border-radius: 3px;
  letter-spacing: 0.05em;
`;

export const Logo = styled.a`
  font-size: 18px;
  font-weight: 900;
  line-height: 1;
  letter-spacing: 5px;
  color: #fff;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  padding: 2rem 3rem;
  width: inherit;
  gap: 25px;
  align-items: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

export const StyledSidebar = styled.aside`
  height: max-content;
  width: 200px;
  font-family: sans-serif;

  & > ul {
    list-style: none;

    & > li {
      font-size: 24px;
      line-height: 28px;
      font-weight: 400;
      display: flex;
      margin-bottom: 16px;
      font-weight: 700;

      & a {
        display: flex;
        gap: 10px;
        align-items: center;
      }

      & li:hover a {
        color: gray;
      }

      & li:hover .icon-box svg path {
        fill: gray;
      }
    }
  }

  & > ul ul {
    list-style: none;

    & > li {
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 10px;
    }
  }

  & .icon-box {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    & svg {
      height: 100%;
    }
  }

  @media (max-width: 1000px) {
    position: absolute;
    right: ${props => props.showSidebar ? "0" : "-100%"};
    background-color: black;
    padding: 15px;
    border: 1px solid darkslategray;
    border-radius: 12px;
    z-index: 50;
    transition: .5s ease;
  }
`;

export const StyledSearchWrapper = styled.div`
  display: flex;
  flex: 1;
  height: 30px;
  border-radius: 12px;
  overflow: hidden;
  font-size: 14px;
  line-height: normal;
  font-weight: 400;
  padding: 0 12px 0 38px;
  line-height: 14px;
  color: hsla(0, 0%, 100%, 0.6);
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIG9wYWNpdHk9Jy40JyB3aWR0aD0nMzEnIGhlaWdodD0nMzEnIHZpZXdCb3g9JzAgMCAxNCAxNCc+PHBhdGggZmlsbD0nI0ZGRicgZmlsbC1ydWxlPSdldmVub2RkJyBkPSdNOS4yMDIgMy4wMjZhNC4zNjcgNC4zNjcgMCAxMC02LjE3NiA2LjE3NiA0LjM2NyA0LjM2NyAwIDEwNi4xNzYtNi4xNzZtNC41NDMgMTAuNzE5YS44NzUuODc1IDAgMDEtMS4yMzYgMGwtMi43NTEtMi43NTJjLTIuMzk1IDEuNzktNS43OTEgMS42MjEtNy45NjctLjU1NWE2LjExMyA2LjExMyAwIDAxMC04LjY0NyA2LjExMyA2LjExMyAwIDAxOC42NDcgMGMyLjE3NiAyLjE3NiAyLjM0NiA1LjU3Mi41NTUgNy45NjdsMi43NTIgMi43NTFjLjM0LjM0MS4zNC44OTQgMCAxLjIzNicvPjwvc3ZnPg==)
    no-repeat scroll 16px;
  background-size: 14px;
  background-color: hsla(0, 0%, 100%, 0.16);
  border: none;
  -webkit-transition: color 0.3s, background-color 0.3s, opacity 0.3s;
  transition: color 0.3s, background-color 0.3s, opacity 0.3s;

  & input {
    flex: 1;
    background-color: transparent;
    outline: none;
    box-shadow: none;
    border: none;
  }

  & > input:focus {
    color: #fff;
    opacity: 1;
  }
`;

export const CloseBtn = styled.span`
  display: ${(props) => (props.show ? "block" : "none")};
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTInIGhlaWdodD0nMTInIHZpZXdCb3g9JzAgMCAxMiAxMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNNiA3LjQxN0wxLjY5OCAxMS43MmExLjAwMiAxLjAwMiAwIDAxLTEuNDE2LTEuNDE3TDQuNTgyIDZsLTQuMy00LjMwMkExLjAwMiAxLjAwMiAwIDAxMS42OTguMjgyTDYgNC41ODJsNC4zMDItNC4zYTEuMDAyIDEuMDAyIDAgMDExLjQxNiAxLjQxN0w3LjQxOCA2bDQuMzAxIDQuMzAyYTEuMDAyIDEuMDAyIDAgMDEtMS40MTcgMS40MTZMNiA3LjQxOHonIGZpbGwtcnVsZT0nZXZlbm9kZCcgb3BhY2l0eT0nLjYnLz48L3N2Zz4=);
  background-size: auto;
  background-position: 10px center;
  height: 15px;
  width: 15px;
  position: relative;
  left: -20px;
  filter: invert(1);
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  z-index: 50;
`;
