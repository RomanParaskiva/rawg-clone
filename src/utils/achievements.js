import Image from "next/image";
import { Box, StyledAchievements } from "@/styles/styles";

export const _getAchievementsList = (list) => {
  return list.map((item) => (
    <StyledAchievements key={item.id}>
      <Image className="ach__image" src={item.image} width="100" height="100" />
      <Box column>
        <Box>
          <h3 className="ach_title">{item.name}</h3>
          <span className="ach__percent">{item.percent} %</span>
        </Box>
        <p>{item.description}</p>
      </Box>
    </StyledAchievements>
  ));
};
