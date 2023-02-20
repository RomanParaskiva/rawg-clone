import React, { useState, useEffect, memo } from "react";
import { Grid } from "@/styles/styles";
import { createGridColumns } from "@/utils/createColumns";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

const GridComponent = ({items, columns, next, Component}) => {
  const [data, setData] = useState([...items]);
  const [hasNext, setHasNext] = useState(next);

  useEffect(() => {
    setData([...items]);
    setHasNext(next);
  }, [items, next]);
 
  const getMoreGames = async () => {
    await axios.get(hasNext).then(({ data }) => {
      setData((prev) => [...prev, ...data.results]);
      setHasNext((prev) => data.next);
    });
  };  

  return (
    <Grid columns={columns}>
      <InfiniteScroll dataLength={data.length} next={getMoreGames} hasMore={!!next} loader={<h3> Loading...</h3>}>
        {createGridColumns(data, columns, Component)}
      </InfiniteScroll>
    </Grid>
  );
};

export default memo(GridComponent);
