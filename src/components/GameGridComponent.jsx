import React, { useState, useEffect, useRef, memo, useCallback } from "react";
import { GameGrid } from "@/styles/styles";
import { createGridColumns } from "@/utils/createColumns";

import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

const GameGridComponent = ({ games, next, mainRef }) => {
  const [columns, setColumns] = useState(4);
  const [data, setData] = useState([...games]);
  const [hasNext, setHasNext] = useState(next);
  const getMoreGames = async () => {
    console.log("SAdsadasd");
   await axios.get(hasNext).then(({ data }) => {
      setData((prev) => [...prev, ...data.results]);
      setHasNext((prev) => data.next);
    });
  };

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
  console.log(games.length, !!next);
  return (
    <GameGrid columns={columns}>
      <InfiniteScroll dataLength={data.length} next={getMoreGames} hasMore={!!next} loader={<h3> Loading...</h3>} endMessage={<h4>Nothing more to show</h4>}>
        {createGridColumns(data, columns)}
      </InfiniteScroll>
    </GameGrid>
  );
};

export default GameGridComponent;
