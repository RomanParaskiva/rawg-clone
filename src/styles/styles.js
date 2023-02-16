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
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px 0;
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
