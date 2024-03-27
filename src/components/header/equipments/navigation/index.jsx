import * as React from "react";
import Typography from "@mui/material/Typography";

import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";

import ContainerCss from "../../../container/style.module.css";
import NavCss from "./style.module.css";

import ReceiptIcon from "./img/State=Falsemaillog.svg";
import CaretRight from "./img/CaretRight.svg";
import Pluse from "./img/PlusCircleplus.svg";

function PlusIcone() {
    return <img src={Pluse} alt="plus" />;
  }

export function NavigationBar() {
  return (
    <Box component="article">

        <nav className={NavCss.navbar}>
          <ul className={NavCss.logocomp}>
            <li>
              <Typography gutterBottom className={NavCss.logotitle}>
                <img src={ReceiptIcon} alt="Logo" />
              </Typography>
            </li>
          </ul>

          <ul className={NavCss.mainnav}>
            <li>
              <Typography
                variant="body1"
                gutterBottom
                className={NavCss.navigation}
              >
                <Link href="#" underline="none" sx={{ color: "white" }}>
                  <span>Home</span>
                  <span>
                    <img
                      src={CaretRight}
                      alt="Loading..."
                      className={NavCss.logoselector}
                    />
                  </span>
                </Link>
              </Typography>
            </li>
            <li>
              <Typography
                variant="body1"
                gutterBottom
                className={NavCss.navigation}
              >
                <Link href="#" underline="none" sx={{ color: "white" }}>
                  Listing
                </Link>
              </Typography>
            </li>
            <li>
              <Typography
                variant="body1"
                gutterBottom
                className={NavCss.navigation}
              >
                <Link href="#" underline="none" sx={{ color: "white" }}>
                  <span>Pages</span>
                  <span>
                    <img
                      src={CaretRight}
                      alt="Loading..."
                      className={NavCss.logoselector}
                    />
                  </span>
                </Link>
              </Typography>
            </li>
            <li>
              <Typography
                variant="body1"
                gutterBottom
                className={NavCss.navigation}
              >
                <Link href="#" underline="none" sx={{ color: "white" }}>
                  Get Membership
                </Link>
              </Typography>
            </li>
            <li>
              <Typography
                variant="body1"
                gutterBottom
                className={NavCss.navigation}
              >
                <Link href="#" underline="none" sx={{ color: "white" }}>
                  Contact
                </Link>
              </Typography>
            </li>
          </ul>

          <ul className={NavCss.leftnav}>
            <li>
              <Stack direction="row" spacing={2}>
                <Button variant="text" size="Medium" href="#contained-buttons">
                  <Typography gutterBottom className={NavCss.signin}>
                    <span>Sign In</span>
                  </Typography>
                </Button>
              </Stack>
            </li>
            <li className={NavCss.postads}>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  size="Medium"
                  startIcon={<PlusIcone />}
                  sx={{ backgroundColor: "white" }}
                >
                  <Typography gutterBottom className={NavCss.publishads}>
                    Push Ads
                  </Typography>
                </Button>
              </Stack>
            </li>
            <li>
              <span>Logo</span>
              <span>Eng</span>
            </li>
          </ul>
        </nav>

    </Box>
  );
}
