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
import checked from "./img/Check (1).svg";
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
        <Box>
          <Typography variant="h3" className={leftCss.titledescription}>
            Descriptions
          </Typography>
          <Typography className={leftCss.description}>
            Sed elementum pellentesque nibh, auctor varius felis ornare euismod.
            Etiam in purus ac ipsum placerat imperdiet eu lacinia quam. Aliquam
            vel scelerisque quam. In suscipit massa non elementum commodo.
            Nullam id mi pellentesque, tempus mauris quis, egestas arcu. In
            condimentum mollis purus vitae egestas. Donec consectetur, felis et
            semper fermentum, eros orci egestas mauris, at imperdiet justo erat
            vel quam. Aliquam at risus nec augue molestie consectetur eget sit
            amet mauris. Mauris a lectus varius, dignissim nulla quis, commodo
            justo. Donec ornare condimentum arcu sit amet feugiat. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Donec venenatis
            mauris at sapien ultricies, sit amet pellentesque arcu imperdiet.
            Nulla venenatis vel lectus interdum elementum. Suspendisse cursus
            sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna,
            id porttitor est dignissim nec. Pellentesque scelerisque hendrerit
            posuere. Sed at dolor quis nisi rutrum accumsan et sagittis massa.
            Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa
            at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu
            vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse
            eu fringilla leo, non aliquet sem.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h3" className={leftCss.feturtitle}>
            Feature
          </Typography>
          <Box className={leftCss.feturbox}>
            <ul>
              <li>
                <img src={checked} />
                <Typography>128GB internal memory with 8GB RAM</Typography>
              </li>
              <li>
                <img src={checked} />
                <Typography>
                  Fingerprint (under display, optical), accelerometer.
                </Typography>
              </li>
              <li>
                <img src={checked} />
                <Typography>
                  Android 11, Funtouch 11.1 Operating System
                </Typography>
              </li>
              <li>
                <img src={checked} />
                <Typography>
                  Glass front, plastic frame, plastic back
                </Typography>
              </li>
              <li>
                <img src={checked} />
                <Typography>LED flash, HDR, panorama</Typography>
              </li>
              <li>
                <img src={checked} />
                <Typography>Li-Po 4000 mAh, non-removable battery</Typography>
              </li>
              <li>
                <img src={checked} />
                <Typography>
                  Fast charging 33W, 63% in 30 min (advertised)
                </Typography>
              </li>
              <li>
                <img src={checked} />
                <Typography>1 Year international warranty</Typography>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
