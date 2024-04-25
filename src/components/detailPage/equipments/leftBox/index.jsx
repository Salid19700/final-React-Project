import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { Component } from "react";
import Slider from "react-slick";

import leftCss from "./style.module.css";

import starIcone from "./img/Icon.svg";
import verifiedIcone from "./img/Icon (1).svg";
import locationicone from "./img/MapPin (1).svg";
import clockIcone from "./img/Clock (1).svg";
import viowIcone from "./img/Eye.svg";
import { CustomPaging } from "./equipments";

export function MainBox() {
  return (
    <Box component="section">
      <Box className={leftCss.boxitem}>
        <Box className={leftCss.header}>
          <ul className={leftCss.tages}>
            <li>
              <Typography>Featured</Typography>
            </li>
            <li>
              <Typography>
                <img src={starIcone} />
                Member
              </Typography>
            </li>
            <li>
              <Typography>
                <img src={verifiedIcone} />
                Verified Seller
              </Typography>
            </li>
          </ul>
          <Typography variant="h2" className={leftCss.title}>
            Apple iPhone 7 Plus (32 GB) ↗️ Hot price (Used)
          </Typography>
          <ul className={leftCss.infotitle}>
            <li>
              <Typography>
                <img src={locationicone} />
                4517 New York. Manchester, Kentucky 394
              </Typography>
            </li>
            <li>
              <Typography>
                <img src={clockIcone} />
                29 Jun 10:21 PM
              </Typography>
            </li>
            <li>
              <Typography>
                <img src={viowIcone} />
                69,656 Viewed
              </Typography>
            </li>
          </ul>
        </Box>
        <Box>
          <CustomPaging />
        </Box>
      </Box>
    </Box>
  );
}
