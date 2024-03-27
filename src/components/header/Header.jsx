import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

import { BackGroundImg } from "./equipments/backGround/index";

import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";

import ContainerCss from "../container/style.module.css";
import HeaderCSS from "./style.module.css";

import { NavigationBar } from "./equipments/navigation/index";
import { BannerTitle } from "./equipments/banner";

export function Header() {
  return (
    <React.Fragment>
      <CssBaseline />
      <header>
        <Box component="section" className={ContainerCss.contain}>
          <NavigationBar />
          <BannerTitle />
        </Box>
      </header>
    </React.Fragment>
  );
}
