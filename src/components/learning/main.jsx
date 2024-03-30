import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

import ContainerCss from "../container/style.module.css";
import LearningCss from "./style.module.css";
import { MediaCard } from "./equipment/card";

import person from "./img/user-plus-duotone.svg";
import note from './img/Notepad.svg';
import box from "./img/package-duotone.svg"

export function Main() {
  return (
    
    <Box component="section" className={ContainerCss.contain}>
      <Box className={LearningCss.container}>
        <Typography variant="h1" gutterBottom className={LearningCss.title}>
          How it Work
        </Typography>
        <Box className={LearningCss.banner}>
            <MediaCard img={person} rank={"01"} title={"Create Account"} description={"Vestibulum quis consectetur est. Fusce hendrerit neque at facilisis facilisis. Praesent a pretium elit. Nulla aliquam puru."}/>
            <MediaCard img={note} rank={"02"} title={"Post a Ads"} description={"Vestibulum quis consectetur est. Fusce hendrerit neque at facilisis facilisis. Praesent a pretium elit. Nulla aliquam puru."}/>
            <MediaCard img={box} rank={"03"} title={"Start Earning"} description={"Vestibulum quis consectetur est. Fusce hendrerit neque at facilisis facilisis. Praesent a pretium elit. Nulla aliquam puru."}/>         
        </Box>
      </Box>
    </Box>
  );
}
