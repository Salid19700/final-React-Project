import { Box, Typography } from "@mui/material";

import ContainerCss from "../container/style.module.css";
import plocationCss from './style.module.css';
import MediaCard from "./equipments";

export function PopularLocatin() {
  return (
    <Box component="section" className={plocationCss.box}>
      <Box className={ContainerCss.contain}>
        <Typography gutterBottom variant="h1" className={plocationCss.title}>
          Popular Location
        </Typography>
        <MediaCard />
      </Box>
    </Box>
  );
}
