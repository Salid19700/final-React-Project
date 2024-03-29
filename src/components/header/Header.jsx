import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";

import { BackGroundImg } from "./equipments/backGround/index";

import { Box } from "@mui/material";

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
        <Box component="section" className={ContainerCss.contain}>
          <NavigationBar />
          <BannerTitle />
          <TopCat />
        </Box>
      </header>
    </React.Fragment>
  );
}
