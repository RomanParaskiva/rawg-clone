import React from "react";
import Link from "next/link";
import { Box, Heading_h2, StyledStoreCard } from "@/styles/styles";

const StoreCard = ({ item }) => {
  return (
    <StyledStoreCard backgroundImage={item.image_background} className="game-card">
      <div className="overlay"></div>
      <Link href={`/stores/${item.id}`}>
        <Heading_h2>{item.name}</Heading_h2>
      </Link>
      <Box style={{ justifyContent: "space-between" }}>
        <span>Total games</span>
        <span>{item.games_count}</span>
      </Box>
      <div className="line"></div>
      <Box column>
        {item.games.map((game) => {
          return (
            <Link key={game.id} href={`/games/${game.slug}`}>
              <Box style={{ justifyContent: "space-between" }}>
                <span style={{ fontSize: "16px" }}>{game.name}</span>
                <span>{game.added}</span>
              </Box>
            </Link>
          );
        })}
      </Box>
    </StyledStoreCard>
  );
};

export default StoreCard;
