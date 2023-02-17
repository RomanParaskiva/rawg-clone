import { useState, memo, useEffect } from "react";
import client from "@/axios";
import Head from "next/head";
import { Inter } from "@next/font/google";
import { Heading_h1, StyledMain, PageSubtitle } from "@/styles/styles";
import GameGridComponent from "@/components/GameGridComponent";
import CustomSelect from "@/components/CustomSelect";
import { useRouter } from "next/router";
import useStore from "@/store";

const inter = Inter({ subsets: ["latin"] });

const Home = ({ response, ordering }) => {
  // const [games, setGames] = useState([]);
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

  // useEffect(() => {
  //   setGames([...response.results]);
  // }, [ordering]);
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
        <CustomSelect
          title={"Order by:"}
          options={[
            { title: "Release date from", value: "released" },
            { title: "Release date to", value: "-released" },
            { title: "Average rating from", value: "rating" },
            { title: "Average rating to", value: "-rating" },
          ]}
          onChange={handleFilters}
        />
        <GameGridComponent />
      </StyledMain>
    </>
  );
};

export default Home;

export const getServerSideProps = async ({ query }) => {
  try {
    let response = {};
    let ordering = "-released";
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
      const { data } = await client.get("/games", {
        params: {
          page: 1,
          page_size: 20,
          dates: "2010-01-01,2023-12-31",
          ordering,
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
