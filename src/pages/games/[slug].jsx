import React from "react";
import Head from "next/head";
import Link from "next/link";
import client from "@/axios";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { StyledMain, Heading_h1, Box, GenreSpan, StyledSwiper, ReleaseDate, Heading_h2, Separator } from "@/styles/styles";
import { getPlatformIcons } from "@/utils/platforms";
import { _getAchievementsList } from "@/utils/achievements";
import "swiper/css";
import "swiper/css/navigation";

const GamePage = ({ game }) => {
  const achievements = game?.achievements?.length > 0 ? _getAchievementsList(game.achievements) : [];
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
          {game?.description_raw?.length > 0 && (
            <Box column>
              <Heading_h2>About</Heading_h2>
              <Box style={{ maxWidth: "700px" }}>
                <p style={{ fontSize: "20px", letterSpacing: "0.05em" }}>{game.description_raw}</p>
              </Box>
            </Box>
          )}
          <Box column>
            <span>Genre</span>
            <Box>
              {game.genres.map((item) => (
                <GenreSpan key={item.id}>{item.name}</GenreSpan>
              ))}
            </Box>

            {game.publishers.length > 0 && (
              <>
                <Separator />
                <span>Publishers</span>
                <Box column>
                  {game.publishers.map((item) => (
                    <h3 key={item.id}>{item.name}</h3>
                  ))}
                </Box>
              </>
            )}
            {game?.website && (
              <>
                <Separator />
                <span>Website</span>
                <Box>
                  <Link target={"_blank"} href={game.website}>
                    {game.website}
                  </Link>
                </Box>
              </>
            )}
          </Box>
        </Box>
        <Box column>
          {achievements.length > 0 && <Heading_h2>Achievements</Heading_h2>}
          {achievements}
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

    const ach = await client.get(`/games/${data.id}/achievements`);

    if (ach?.data?.results?.length > 0) {
      data.achievements = ach.data.results;
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
