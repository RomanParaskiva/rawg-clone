import React from "react";
import { Box, StyledCard, GenreSpan } from "@/styles/styles";
import { getPlatformIcons } from "@/utils/platforms";
import Link from "next/link";

const GameCard = ({ item }) => {
  console.log(item);
  return (
    <Link href={`/games/${item.slug}`}>
      <StyledCard backgroundImage={item.background_image} className="game-card">
        <div className="card__image"></div>
        <Box>{getPlatformIcons(item.parent_platforms)}</Box>
        <Box>
          <h3>{item.name}</h3>
        </Box>

        <div>
          <span>Released: {item.released.split("-").reverse().join(".")}</span>
        </div>
        <Box>
          {item.genres.map((genre) => (
            <GenreSpan key={genre.id}>{genre.name}</GenreSpan>
          ))}
        </Box>
        <Box>
          <span>Metacritic : {item.metacritic}</span>{" "}
          <span>
            Raiting {item.rating} / {item.rating_top}
          </span>
        </Box>
      </StyledCard>
    </Link>
  );
};

export default GameCard;
