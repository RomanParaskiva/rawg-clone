import { useState, memo, useEffect } from "react";
import client from "@/axios";
import Head from "next/head";
import { Inter } from "@next/font/google";
import { Heading_h1, StyledMain, PageSubtitle, Box, IconWrapper } from "@/styles/styles";
import GameGridComponent from "@/components/GameGridComponent";
import CustomSelect from "@/components/CustomSelect";
import { useRouter } from "next/router";
import useStore from "@/store";
import { AndroidIcon, IosIcon, NintendoIcon, PcIcon, PlatformsIcon, PlayStationIcon, XboxIcon } from "@/components/icons";

const inter = Inter({ subsets: ["latin"] });

const Home = ({ response }) => {
  const router = useRouter();
  const { setGames, setNextUrl } = useStore((state) => ({ setGames: state.setGames, setNextUrl: state.setNextUrl }));

  useEffect(() => {
    if (response?.results?.length > 0) {
      setGames(response.results);
      setNextUrl(response.next);
    }
  }, [response]);

  const handleFilters = (value) => {
    const query = router.query;
    query.ordering = value;
    router.push({
      pathname: router.pathname,
      query: query,
    });
  };

  const handlePlatforms = value => {
    const query = router.query;
    query.parent_platforms = value;
    router.push({
      pathname: router.pathname,
      query: query,
    });
  }

  return (
    <>
      <Head>
        <title>{response?.seo_title}</title>
        <meta name="description" content={response?.seo_title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StyledMain>
        <Heading_h1>New and trending</Heading_h1>
        <PageSubtitle>Based on player counts and release date</PageSubtitle>
        <Box>
          <CustomSelect
            width={"220px"}
            title={"Order by:"}
            options={[
              { title: "Release date from", value: "released" },
              { title: "Release date to", value: "-released" },
              { title: "Average rating from", value: "rating" },
              { title: "Average rating to", value: "-rating" },
            ]}
            onChange={handleFilters}
          />

          <CustomSelect
            width={"50px"}
            title={<IconWrapper><PlatformsIcon/></IconWrapper>}
            options={[
              { title: <IconWrapper><PcIcon/></IconWrapper>, value: "1" },
              { title: <IconWrapper><PlayStationIcon/></IconWrapper>, value: "2" },
              { title: <IconWrapper><XboxIcon/></IconWrapper>, value: "3" },
              { title: <IconWrapper><NintendoIcon/></IconWrapper>, value: "4" },
              { title: <IconWrapper><IosIcon/></IconWrapper>, value: "5" },
              { title: <IconWrapper><AndroidIcon/></IconWrapper>, value: "6" },
            ]}
            onChange={handlePlatforms}
          />
        </Box>
        <GameGridComponent />
      </StyledMain>
    </>
  );
};

export default memo(Home);

export const getServerSideProps = async ({ query }) => {
  try {
    let response = {};
    let ordering = "-released";
    let parent_platforms = "";
    if (typeof query === undefined) {
      const { data } = await client.get("/games", {
        params: {
          page: 1,
          page_size: 20,
          dates: "2010-01-01,2023-12-31",
          ordering,
        },
      });

      response = { ...data };
    } else {
      ordering = query.ordering;
      parent_platforms = query.parent_platforms
      const { data } = await client.get("/games", {
        params: {
          page: 1,
          page_size: 20,
          dates: "2010-01-01,2023-12-31",
          ordering,
          parent_platforms
        },
      });
      response = { ...data };
    }

    return {
      props: {
        response,
      },
    };
  } catch (error) {
    return {
      props: {
        error: "404",
      },
    };
  }
};
