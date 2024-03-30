import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";

import { BackGroundImg } from "./equipments/backGround/index";

import { Box, rgbToHex } from "@mui/material";

import ContainerCss from "../container/style.module.css";
import HeaderCSS from "./style.module.css";

import { NavigationBar } from "./equipments/navigation/index";
import { BannerTitle } from "./equipments/banner";
import { TopCat } from "./equipments/topCategory";

export function Header() {
  return (
    <React.Fragment>
      <CssBaseline />
      <header>
        <Box component="section" className={ContainerCss.contain} sx={{backgroundColor: '#000000d9'}}>
          <NavigationBar />
          <BannerTitle />
          <TopCat />
        </Box>
      </header>
    </React.Fragment>
  );
}
