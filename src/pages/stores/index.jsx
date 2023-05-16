import React, { useEffect } from "react";
import useStore from "@/store";
import { useColumns } from "@/hooks/useColumns.hook";

import Head from "next/head";
import { GridComponent, StoreCard } from "@/components";

import client from "@/axios";

import { StyledMain, Heading_h1 } from "@/styles/styles";

const Stores = ({ data, error }) => {
  const { setStores, setNextUrl, stores } = useStore((state) => ({ setStores: state.setStores, setNextUrl: state.setNextUrl, stores: state.stores }));
  const { columns } = useColumns();
  useEffect(() => {
    if (data?.results?.length > 0) {
      setStores(data.results);
      setNextUrl(data.next);
    }
  }, [data, setStores, setNextUrl]);

  return (
    <>
      <Head>
        <title>All games! - Магазины</title>
      </Head>

      <StyledMain>
        <Heading_h1>Магазины</Heading_h1>

        <GridComponent items={stores} columns={columns} next={data.next} Component={StoreCard} />
      </StyledMain>
    </>
  );
};

export default Stores;

export const getServerSideProps = async () => {
  try {
    const { data } = await client.get(`/stores`);

    return {
      props: {
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
