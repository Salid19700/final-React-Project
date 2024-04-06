import * as React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

import CardCss from "./style.module.css";
import ItemsCss from "../style.module.css";

import Stack from "./img/Stack.svg";
import star from "./img/start.svg";
import person from "./img/User.svg";
import place from "./img/MapPin.svg";
import clock from "./img/Clock.svg";
import heart from "./img/Icon Button.svg";

function StarIcon() {
  return <img src={star} alt="Star" />;
}

export function MediaCard() {
  return (
    <>
      <Card className={CardCss.box} sx={{left: '100px', top: '98px'}}>
        <CardMedia
          component="img"
          height="140"
          image="https://placehold.co/220x220"
          alt="green iguana"
          className={CardCss.image}
        />
        <Box className={CardCss.boxitem}>
          <Box className={CardCss.contents}>
            <Box className={CardCss.header}>
              <ul className={CardCss.title}>
                <li>
                  <img src={Stack} alt="nothing" />
                  <Typography
                    gutterBottom
                    variant="body"
                    className={CardCss.categoty}
                  >
                    Vehicles
                  </Typography>
                </li>
                <li>
                  <Chip
                    icon={<StarIcon />}
                    label="Member"
                    variant="outlined"
                    className={CardCss.firstbg}
                  />
                </li>
                <li>
                  <Chip
                    icon={""}
                    label="Featured"
                    variant="outlined"
                    className={CardCss.secondbg}
                  />
                </li>
              </ul>
              <Typography gutterBottom variant="body" className={CardCss.info}>
                Samsung Galaxy A22 2021
              </Typography>
            </Box>
            <Box>
              <ul className={CardCss.fact}>
                <li>
                  <img src={person} alt="" />
                  <Typography
                    gutterBottom
                    variant="body"
                    className={CardCss.factdetail}
                  >
                    Jerome Bell
                  </Typography>
                </li>
                <li>
                  <img src={place} alt="" />
                  <Typography gutterBottom variant="body">
                    United States
                  </Typography>
                </li>
                <li>
                  <img src={clock} alt="" />
                  <Typography gutterBottom variant="body">
                    2 hours
                  </Typography>
                </li>
              </ul>
            </Box>
            <Box>
              <ul className={CardCss.footer}>
                <li>
                  <Typography gutterBottom variant="body">
                    $5200
                  </Typography>
                </li>
                <li>
                  <img src={heart} alt="" />
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Card>
      <Card className={CardCss.box} sx={{left: '772px', top: '98px'}}>
        <CardMedia
          component="img"
          height="140"
          image="https://placehold.co/220x220"
          alt="green iguana"
          className={CardCss.image}
        />
        <Box className={CardCss.boxitem}>
          <Box className={CardCss.contents}>
            <Box className={CardCss.header}>
              <ul className={CardCss.title}>
                <li>
                  <img src={Stack} alt="nothing" />
                  <Typography
                    gutterBottom
                    variant="body"
                    className={CardCss.categoty}
                  >
                    Vehicles
                  </Typography>
                </li>
                <li>
                  <Chip
                    icon={<StarIcon />}
                    label="Member"
                    variant="outlined"
                    className={CardCss.firstbg}
                  />
                </li>
                <li>
                  <Chip
                    icon={""}
                    label="Featured"
                    variant="outlined"
                    className={CardCss.secondbg}
                  />
                </li>
              </ul>
              <Typography gutterBottom variant="body" className={CardCss.info}>
                Samsung Galaxy A22 2021
              </Typography>
            </Box>
            <Box>
              <ul className={CardCss.fact}>
                <li>
                  <img src={person} alt="" />
                  <Typography
                    gutterBottom
                    variant="body"
                    className={CardCss.factdetail}
                  >
                    Jerome Bell
                  </Typography>
                </li>
                <li>
                  <img src={place} alt="" />
                  <Typography gutterBottom variant="body">
                    United States
                  </Typography>
                </li>
                <li>
                  <img src={clock} alt="" />
                  <Typography gutterBottom variant="body">
                    2 hours
                  </Typography>
                </li>
              </ul>
            </Box>
            <Box>
              <ul className={CardCss.footer}>
                <li>
                  <Typography gutterBottom variant="body">
                    $5200
                  </Typography>
                </li>
                <li>
                  <img src={heart} alt="" />
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Card>
      <Card className={CardCss.box} sx={{left: '100px', top: '342px'}}>
        <CardMedia
          component="img"
          height="140"
          image="https://placehold.co/220x220"
          alt="green iguana"
          className={CardCss.image}
        />
        <Box className={CardCss.boxitem}>
          <Box className={CardCss.contents}>
            <Box className={CardCss.header}>
              <ul className={CardCss.title}>
                <li>
                  <img src={Stack} alt="nothing" />
                  <Typography
                    gutterBottom
                    variant="body"
                    className={CardCss.categoty}
                  >
                    Vehicles
                  </Typography>
                </li>
                <li>
                  <Chip
                    icon={<StarIcon />}
                    label="Member"
                    variant="outlined"
                    className={CardCss.firstbg}
                  />
                </li>
                <li>
                  <Chip
                    icon={""}
                    label="Featured"
                    variant="outlined"
                    className={CardCss.secondbg}
                  />
                </li>
              </ul>
              <Typography gutterBottom variant="body" className={CardCss.info}>
                Samsung Galaxy A22 2021
              </Typography>
            </Box>
            <Box>
              <ul className={CardCss.fact}>
                <li>
                  <img src={person} alt="" />
                  <Typography
                    gutterBottom
                    variant="body"
                    className={CardCss.factdetail}
                  >
                    Jerome Bell
                  </Typography>
                </li>
                <li>
                  <img src={place} alt="" />
                  <Typography gutterBottom variant="body">
                    United States
                  </Typography>
                </li>
                <li>
                  <img src={clock} alt="" />
                  <Typography gutterBottom variant="body">
                    2 hours
                  </Typography>
                </li>
              </ul>
            </Box>
            <Box>
              <ul className={CardCss.footer}>
                <li>
                  <Typography gutterBottom variant="body">
                    $5200
                  </Typography>
                </li>
                <li>
                  <img src={heart} alt="" />
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Card>
      <Card className={CardCss.box} sx={{left: '772px', top: '342px'}}>
        <CardMedia
          component="img"
          height="140"
          image="https://placehold.co/220x220"
          alt="green iguana"
          className={CardCss.image}
        />
        <Box className={CardCss.boxitem}>
          <Box className={CardCss.contents}>
            <Box className={CardCss.header}>
              <ul className={CardCss.title}>
                <li>
                  <img src={Stack} alt="nothing" />
                  <Typography
                    gutterBottom
                    variant="body"
                    className={CardCss.categoty}
                  >
                    Vehicles
                  </Typography>
                </li>
                <li>
                  <Chip
                    icon={<StarIcon />}
                    label="Member"
                    variant="outlined"
                    className={CardCss.firstbg}
                  />
                </li>
                <li>
                  <Chip
                    icon={""}
                    label="Featured"
                    variant="outlined"
                    className={CardCss.secondbg}
                  />
                </li>
              </ul>
              <Typography gutterBottom variant="body" className={CardCss.info}>
                Samsung Galaxy A22 2021
              </Typography>
            </Box>
            <Box>
              <ul className={CardCss.fact}>
                <li>
                  <img src={person} alt="" />
                  <Typography
                    gutterBottom
                    variant="body"
                    className={CardCss.factdetail}
                  >
                    Jerome Bell
                  </Typography>
                </li>
                <li>
                  <img src={place} alt="" />
                  <Typography gutterBottom variant="body">
                    United States
                  </Typography>
                </li>
                <li>
                  <img src={clock} alt="" />
                  <Typography gutterBottom variant="body">
                    2 hours
                  </Typography>
                </li>
              </ul>
            </Box>
            <Box>
              <ul className={CardCss.footer}>
                <li>
                  <Typography gutterBottom variant="body">
                    $5200
                  </Typography>
                </li>
                <li>
                  <img src={heart} alt="" />
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Card>
      <Card className={CardCss.box} sx={{left: '100px', top: '586px'}}>
        <CardMedia
          component="img"
          height="140"
          image="https://placehold.co/220x220"
          alt="green iguana"
          className={CardCss.image}
        />
        <Box className={CardCss.boxitem}>
          <Box className={CardCss.contents}>
            <Box className={CardCss.header}>
              <ul className={CardCss.title}>
                <li>
                  <img src={Stack} alt="nothing" />
                  <Typography
                    gutterBottom
                    variant="body"
                    className={CardCss.categoty}
                  >
                    Vehicles
                  </Typography>
                </li>
                <li>
                  <Chip
                    icon={<StarIcon />}
                    label="Member"
                    variant="outlined"
                    className={CardCss.firstbg}
                  />
                </li>
                <li>
                  <Chip
                    icon={""}
                    label="Featured"
                    variant="outlined"
                    className={CardCss.secondbg}
                  />
                </li>
              </ul>
              <Typography gutterBottom variant="body" className={CardCss.info}>
                Samsung Galaxy A22 2021
              </Typography>
            </Box>
            <Box>
              <ul className={CardCss.fact}>
                <li>
                  <img src={person} alt="" />
                  <Typography
                    gutterBottom
                    variant="body"
                    className={CardCss.factdetail}
                  >
                    Jerome Bell
                  </Typography>
                </li>
                <li>
                  <img src={place} alt="" />
                  <Typography gutterBottom variant="body">
                    United States
                  </Typography>
                </li>
                <li>
                  <img src={clock} alt="" />
                  <Typography gutterBottom variant="body">
                    2 hours
                  </Typography>
                </li>
              </ul>
            </Box>
            <Box>
              <ul className={CardCss.footer}>
                <li>
                  <Typography gutterBottom variant="body">
                    $5200
                  </Typography>
                </li>
                <li>
                  <img src={heart} alt="" />
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Card>
      <Card className={CardCss.box} sx={{left: '772px', top: '586px'}}>
        <CardMedia
          component="img"
          height="140"
          image="https://placehold.co/220x220"
          alt="green iguana"
          className={CardCss.image}
        />
        <Box className={CardCss.boxitem}>
          <Box className={CardCss.contents}>
            <Box className={CardCss.header}>
              <ul className={CardCss.title}>
                <li>
                  <img src={Stack} alt="nothing" />
                  <Typography
                    gutterBottom
                    variant="body"
                    className={CardCss.categoty}
                  >
                    Vehicles
                  </Typography>
                </li>
                <li>
                  <Chip
                    icon={<StarIcon />}
                    label="Member"
                    variant="outlined"
                    className={CardCss.firstbg}
                  />
                </li>
                <li>
                  <Chip
                    icon={""}
                    label="Featured"
                    variant="outlined"
                    className={CardCss.secondbg}
                  />
                </li>
              </ul>
              <Typography gutterBottom variant="body" className={CardCss.info}>
                Samsung Galaxy A22 2021
              </Typography>
            </Box>
            <Box>
              <ul className={CardCss.fact}>
                <li>
                  <img src={person} alt="" />
                  <Typography
                    gutterBottom
                    variant="body"
                    className={CardCss.factdetail}
                  >
                    Jerome Bell
                  </Typography>
                </li>
                <li>
                  <img src={place} alt="" />
                  <Typography gutterBottom variant="body">
                    United States
                  </Typography>
                </li>
                <li>
                  <img src={clock} alt="" />
                  <Typography gutterBottom variant="body">
                    2 hours
                  </Typography>
                </li>
              </ul>
            </Box>
            <Box>
              <ul className={CardCss.footer}>
                <li>
                  <Typography gutterBottom variant="body">
                    $5200
                  </Typography>
                </li>
                <li>
                  <img src={heart} alt="" />
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Card>
    </>
  );
}
