import React, { useState, useEffect, useRef, memo, useCallback } from "react";
import { GameGrid } from "@/styles/styles";
import { createGridColumns } from "@/utils/createColumns";
import useStore from "@/store";

import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

const GameGridComponent = () => {
  const { games, next } = useStore((state) => ({ games: state.games, next: state.nextUrl }));
  const [columns, setColumns] = useState(4);
  const [data, setData] = useState([...games]);
  const [hasNext, setHasNext] = useState(next);

  const getMoreGames = async () => {
    await axios.get(hasNext).then(({ data }) => {
      setData((prev) => [...prev, ...data.results]);
      setHasNext((prev) => data.next);
    });
  };

  useEffect(() => {
    setData([...games]);
    setHasNext(next);
  }, [games]);

  useEffect(() => {
    const handleResize = () => {
      if (screen.width >= 1440) setColumns(4);
      if (screen.width >= 1150 && screen.width < 1440) setColumns(3);
      if (screen.width >= 800 && screen.width < 1150) setColumns(2);
      if (screen.width < 800) setColumns(1);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <GameGrid columns={columns}>
      <InfiniteScroll dataLength={data.length} next={getMoreGames} hasMore={!!next} loader={<h3> Loading...</h3>} endMessage={<h4>Nothing more to show</h4>}>
        {createGridColumns(data, columns)}
      </InfiniteScroll>
    </GameGrid>
  );
};

export default memo(GameGridComponent);
