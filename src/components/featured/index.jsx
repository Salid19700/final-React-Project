import { Box, Button, Typography } from "@mui/material";
import { MediaCard } from "./card";

import feturCss from "./style.module.css";
import ContainerCss from "../container/style.module.css";

export function Feture() {
  return (
    <Box className={feturCss.contain} component="section">
      <Box className={ContainerCss.contain}>
        <Typography gutterBottom variant="h1" className={feturCss.title}>
          Featured Ads
        </Typography>
        <MediaCard />
      <Button variant="contained" size="medium" className={feturCss.booton}>rthjy</Button>
      </Box>
    </Box>
  );
}
