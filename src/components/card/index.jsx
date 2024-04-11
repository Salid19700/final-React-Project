import CardCss from "./style.module.css";
import ContainerCss from "../container/style.module.css";

import { Box, Button, Typography } from "@mui/material";

export function CardBanner() {
  return (
    <Box component="section" className={CardCss.box}>
      <Box className={ContainerCss.contain}>
        <ul className={CardCss.leftBox}>
          <li>
            <Typography gutterBottom variant="h2" className={CardCss.title}>
              Get Premium Membership
            </Typography>
          </li>
          <li>------</li>
          <li>
            <Typography
              gutterBottom
              variant="h2"
              className={CardCss.description}
            >
              Vestibulum consectetur placerat tellus. Sed faucibus fermentum
              purus, at facilisis neque auctor.
            </Typography>
          </li>
        </ul>
        <ul className={CardCss.rightBox}>
          <li>
            <Button variant="contained" size="large" className={CardCss.button}>
              <Typography gutterBottom className={CardCss.content}>Get Membership</Typography>
            </Button>
          </li>
        </ul>
      </Box>
    </Box>
  );
}
