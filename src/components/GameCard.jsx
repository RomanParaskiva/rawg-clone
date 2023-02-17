import React from "react";
import { Box, StyledCard, GenreSpan } from "@/styles/styles";
import { getPlatformIcons } from "@/utils/platforms";
import Link from "next/link";

const GameCard = ({ game }) => {
  console.log(game);
  return (
    <Link href={`/games/${game.slug}`}>
      <StyledCard backgroundImage={game.background_image} className="game-card">
        <div className="card__image"></div>
        <Box>{getPlatformIcons(game.parent_platforms)}</Box>
        <Box>
          <h3>{game.name}</h3>
        </Box>

        <div>
          <span>Released: {game.released.split("-").reverse().join(".")}</span>
        </div>
        <Box>
          {game.genres.map((genre) => (
            <GenreSpan key={genre.id}>{genre.name}</GenreSpan>
          ))}
        </Box>
        <Box>
          <span>Metacritic : {game.metacritic}</span>{" "}
          <span>
            Raiting {game.rating} / {game.rating_top}
          </span>
        </Box>
      </StyledCard>
    </Link>
  );
};

export default GameCard;
