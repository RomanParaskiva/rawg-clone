import { useState, memo} from "react";
import client from "@/axios";
import Head from "next/head";
import { Inter } from "@next/font/google";
import { Heading_h1, StyledMain, GameGrid, PageSubtitle } from "@/styles/styles";
import GameGridComponent from "@/components/GameGridComponent";

const inter = Inter({ subsets: ["latin"] });

const Home = ({ data }) => {
  const [games, setGames] = useState([...data.results]);
  return (
    <>
      <Head>
        <title>{data?.seo_title}</title>
        <meta name="description" content={data?.seo_title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StyledMain>
        <Heading_h1>New and trending</Heading_h1>
        <PageSubtitle>Based on player counts and release date</PageSubtitle>
        <div>Order by</div>
        <GameGridComponent games={games} next={data.next}/>
      </StyledMain>
    </>
  );
};

export default memo(Home);

export const getStaticProps = async () => {
  const { data } = await client.get("/games", {
    params: {
      page: 1,
      page_size: 20,
      metacritic: "80,100",
      ordering: "-released",
    },
  });

  return {
    props: {
      data,
    },
  };
};
