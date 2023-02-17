import { PcIcon, PlayStationIcon, AndroidIcon, IosIcon, NintendoIcon, PlatformsIcon, XboxIcon } from "@/components/icons";
import { IconWrapper } from "@/styles/styles";

export const getPlatformIcons = (arr) => {
  let counter = 0;
  const res = arr.map(({ platform }) => {
    switch (platform.slug) {
      case "pc":
        return (
          <IconWrapper key={platform.slug}>
            <PcIcon />
          </IconWrapper>
        );
      case "playstation":
        return (
          <IconWrapper key={platform.slug}>
            <PlayStationIcon />
          </IconWrapper>
        );
      case "xbox":
        return (
          <IconWrapper key={platform.slug}>
            <XboxIcon />
          </IconWrapper>
        );
      case "nintendo":
        return (
          <IconWrapper key={platform.slug}>
            <NintendoIcon />
          </IconWrapper>
        );
      case "ios":
        return (
          <IconWrapper key={platform.slug}>
            <IosIcon />
          </IconWrapper>
        );
      case "android":
        return (
          <IconWrapper key={platform.slug}>
            <AndroidIcon />
          </IconWrapper>
        );
      default:
        counter++;
        return
    }
  })
  if(counter > 0) res.push( `+ ${counter}`);
  return res
};
