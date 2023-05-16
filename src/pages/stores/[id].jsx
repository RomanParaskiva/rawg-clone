import React from "react";
import Head from "next/head";
import client from "@/axios";
import { StyledMain, Heading_h1, PageSubtitle } from "@/styles/styles";
import { GameCard, GridComponent } from "@/components";
import { useColumns } from "@/hooks/useColumns.hook";

const StorePage = ({ storeData, data }) => {
  const title = `All Games - Игры доступные на ${storeData.name}`;
  const { columns } = useColumns();
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <StyledMain>
        <Heading_h1>{title}</Heading_h1>
        <PageSubtitle dangerouslySetInnerHTML={{ __html: storeData.description }}></PageSubtitle>

        <GridComponent items={data.results} columns={columns} next={data.next} Component={GameCard} />
      </StyledMain>
    </>
  );
};

export default StorePage;

export const getServerSideProps = async ({ query }) => {
  let storeData = {};
  try {
    const {
      data: { description, games_count, name, ...rest },
    } = await client.get(`/stores/${query.id}`);
    storeData.description = description;
    storeData.games_count = games_count;
    storeData.name = name;

    const { data } = await client.get(`/games`, {
      params: {
        stores: query.id,
      },
    });

    return {
      props: {
        storeData,
        data,
      },
    };
  } catch (error) {
    return {
      props: {
        error: error.message,
      },
    };
  }
};
