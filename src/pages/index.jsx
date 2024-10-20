import { memo, useEffect } from "react";
import client from "@/axios";
import { useRouter } from "next/router";
import Head from "next/head";
import { useColumns } from "@/hooks/useColumns.hook";
import { Heading_h1, StyledMain, PageSubtitle, Box, IconWrapper } from "@/styles/styles";
import { GridComponent, CustomSelect, GameCard } from "@/components";
import { AndroidIcon, IosIcon, NintendoIcon, PcIcon, PlatformsIcon, PlayStationIcon, XboxIcon } from "@/components/icons";
import useStore from "@/store";

const Home = ({ response }) => {
  const { games, next } = useStore((state) => ({ games: state.games, next: state.nextUrl }));
  const router = useRouter();
  const { setGames, setNextUrl } = useStore((state) => ({ setGames: state.setGames, setNextUrl: state.setNextUrl }));
  const { columns } = useColumns();

  useEffect(() => {
    if (response?.results?.length > 0) {
      setGames(response.results);
      setNextUrl(response.next);
    }
  }, [response, setGames, setNextUrl]);

  const handleFilters = (value) => {
    const query = router.query;
    query.ordering = value;
    router.push({
      pathname: router.pathname,
      query: query,
    });
  };

  const handlePlatforms = (value) => {
    const query = router.query;
    query.parent_platforms = value;
    router.push({
      pathname: router.pathname,
      query: query,
    });
  };

  return (
    <>
      <Head>
        <title>All Games - Новые и популярные игры. Обзоры и требования.</title>
      </Head>

      <StyledMain>
        <Heading_h1>Новые и популярные игры</Heading_h1>
        <PageSubtitle>Рейтинг на основе выбора игроков и даты релиза</PageSubtitle>
        <Box>
          <CustomSelect
            width={"220px"}
            title={"Сортировать:"}
            options={[
              { title: "По дате - старые", value: "released" },
              { title: "По дате - новые", value: "-released" },
              { title: "Рейтинг - низкий", value: "rating" },
              { title: "Рейтинг - высокий", value: "-rating" },
            ]}
            onChange={handleFilters}
          />

          <CustomSelect
            width={"50px"}
            title={
              <IconWrapper>
                <PlatformsIcon />
              </IconWrapper>
            }
            options={[
              {
                title: (
                  <IconWrapper>
                    <PcIcon />
                  </IconWrapper>
                ),
                value: "1",
              },
              {
                title: (
                  <IconWrapper>
                    <PlayStationIcon />
                  </IconWrapper>
                ),
                value: "2",
              },
              {
                title: (
                  <IconWrapper>
                    <XboxIcon />
                  </IconWrapper>
                ),
                value: "3",
              },
              {
                title: (
                  <IconWrapper>
                    <NintendoIcon />
                  </IconWrapper>
                ),
                value: "4",
              },
              {
                title: (
                  <IconWrapper>
                    <IosIcon />
                  </IconWrapper>
                ),
                value: "5",
              },
              {
                title: (
                  <IconWrapper>
                    <AndroidIcon />
                  </IconWrapper>
                ),
                value: "6",
              },
            ]}
            onChange={handlePlatforms}
          />
        </Box>
        <GridComponent items={games} columns={columns} next={next} Component={GameCard} />
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
      parent_platforms = query.parent_platforms;
      const { data } = await client.get("/games", {
        params: {
          page: 1,
          page_size: 20,
          dates: "2010-01-01,2023-12-31",
          ordering,
          parent_platforms,
        },
      });
      console.log(data);
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
