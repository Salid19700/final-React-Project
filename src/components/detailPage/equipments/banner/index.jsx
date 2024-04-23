import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

import bannerCss from "./style.module.css";

export function Banner() {
  return (
    <Box component="section" className={bannerCss.backimg}>
      <Box className={bannerCss.boxitem}>
        <Typography variant="h2" className={bannerCss.title}>Vivo21 48MP OIS Slefie</Typography>
        <ul className={bannerCss.desc}>
            <li><Typography>Home</Typography></li>
            <li><Typography>/ Ads List</Typography></li>
            <li><Typography>/ Mobile</Typography></li>
            <li><Typography>/ Vivo</Typography></li>
            <li><Typography>/ Other Models</Typography></li>
            <li><Typography>/ Other Models in New York</Typography></li>
            <li><Typography>/ Vivo21 48MP OIS Slefie</Typography></li>
        </ul>
      </Box>
    </Box>
  );
}
