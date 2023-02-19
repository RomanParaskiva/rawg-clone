import React from "react";
import Head from "next/head";
import client from "@/axios";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { StyledMain, Heading_h1, Box, GenreSpan } from "@/styles/styles";
import { getPlatformIcons } from "@/utils/platforms";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";

const StyledSwiper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 20px 0;

  & img {
    width: auto;
    height: 100%;
    max-height: 300px;
  }
`;

const ReleaseDate = styled.div`
  letter-spacing: 0.05em;
`;

const Heading_h2 = styled.h2`
  font-size: 40px;
  font-family: mono;
  padding: 10px 0;
`;

const GamePage = ({ game }) => {
  
  return (
    <>
      <Head>
        <title>{game.name}</title>
        <meta name="description" content={game.description_raw} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StyledMain>
        <Heading_h1>{game.name}</Heading_h1>
        <Box column style={{ marginBottom: "20px" }}>
          <Box>Platforms: {getPlatformIcons(game.parent_platforms)}</Box>
          <ReleaseDate>Release date {game?.released?.split("-").reverse().join(".") || "unknown"}</ReleaseDate>
        </Box>
        <StyledSwiper>
          <Swiper modules={[Navigation]} spaceBetween={50} slidesPerView={1} navigation>
            {game.screenshots.length > 0 && game.screenshots.map((item) => <SwiperSlide key={item.id}>{<img src={item.image} alt={item.id} />}</SwiperSlide>)}
          </Swiper>
        </StyledSwiper>
        <Box style={{ gap: "25px" }}>
          <Box column>
            <Heading_h2>About</Heading_h2>
            <Box style={{ maxWidth: "700px" }}>
              <p style={{fontSize: "20px", letterSpacing: "0.05em"}}>{game.description_raw}</p>
            </Box>
          </Box>
          <Box column>
            <span>Genre</span>
            <Box>
              {game.genres.map((item) => (
                <GenreSpan key={item.id}>{item.name}</GenreSpan>
              ))}
            </Box>

            <span>Publishers</span>
            <Box column>{game.publishers.map(item => (<h3 key={item.id}>{item.name}</h3>))}</Box>
          </Box>
        </Box>
      </StyledMain>
    </>
  );
};

export default GamePage;

export const getServerSideProps = async ({ query }) => {
 
  try {
    if (typeof query === undefined || !query?.slug) throw new Error("Game not found");

    const { data } = await client.get(`/games/${query.slug}`);

    if (data.screenshots_count > 0) {
      const res = await client.get(`/games/${data.id}/screenshots`);
     
      data.screenshots = [...res.data.results];
    }

    return {
      props: {
        game: { ...data },
      },
    };
  } catch (error) {
    return {
      props: {
        error,
      },
    };
  }
};
