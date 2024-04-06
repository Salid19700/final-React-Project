import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import cardCss from "./style.module.css";

import los from "./img/losangles.png";
import { Box } from "@mui/material";

export default function MediaCard() {
  return (
    <>
    <Card className={cardCss.boxitem} sx={{ left: "100px", top: '98px' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={los}
        title="losangles"
        className={cardCss.img}
      />
      <Box className={cardCss.secondbox}>
        <Box className={cardCss.content}>
          <Typography gutterBottom className={cardCss.title}>
            Las Vegas, USA
          </Typography>
          <Typography gutterBottom className={cardCss.description}>
            12,65ads
          </Typography>
        </Box>
      </Box>
    </Card>
    <Card className={cardCss.boxitem} sx={{ left: "436px", top: '98px' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={los}
        title="losangles"
        className={cardCss.img}
      />
      <Box className={cardCss.secondbox}>
        <Box className={cardCss.content}>
          <Typography gutterBottom className={cardCss.title}>
            Las Vegas, USA
          </Typography>
          <Typography gutterBottom className={cardCss.description}>
            12,65ads
          </Typography>
        </Box>
      </Box>
    </Card>
    <Card className={cardCss.boxitem} sx={{ left: "772px", top: '98px' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={los}
        title="losangles"
        className={cardCss.img}
      />
      <Box className={cardCss.secondbox}>
        <Box className={cardCss.content}>
          <Typography gutterBottom className={cardCss.title}>
            Las Vegas, USA
          </Typography>
          <Typography gutterBottom className={cardCss.description}>
            12,65ads
          </Typography>
        </Box>
      </Box>
    </Card>
    <Card className={cardCss.boxitem} sx={{ left: "1108px", top: '98px' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={los}
        title="losangles"
        className={cardCss.img}
      />
      <Box className={cardCss.secondbox}>
        <Box className={cardCss.content}>
          <Typography gutterBottom className={cardCss.title}>
            Las Vegas, USA
          </Typography>
          <Typography gutterBottom className={cardCss.description}>
            12,65ads
          </Typography>
        </Box>
      </Box>
    </Card>

    {/*-----------------------------------------------------------------*/}

    <Card className={cardCss.boxitem} sx={{ left: "100px", top: '450px' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={los}
        title="losangles"
        className={cardCss.img}
      />
      <Box className={cardCss.secondbox}>
        <Box className={cardCss.content}>
          <Typography gutterBottom className={cardCss.title}>
            Las Vegas, USA
          </Typography>
          <Typography gutterBottom className={cardCss.description}>
            12,65ads
          </Typography>
        </Box>
      </Box>
    </Card>
    <Card className={cardCss.boxitem} sx={{ left: "436px", top: '450px' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={los}
        title="losangles"
        className={cardCss.img}
      />
      <Box className={cardCss.secondbox}>
        <Box className={cardCss.content}>
          <Typography gutterBottom className={cardCss.title}>
            Las Vegas, USA
          </Typography>
          <Typography gutterBottom className={cardCss.description}>
            12,65ads
          </Typography>
        </Box>
      </Box>
    </Card>
    <Card className={cardCss.boxitem} sx={{ left: "772px", top: '450px' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={los}
        title="losangles"
        className={cardCss.img}
      />
      <Box className={cardCss.secondbox}>
        <Box className={cardCss.content}>
          <Typography gutterBottom className={cardCss.title}>
            Las Vegas, USA
          </Typography>
          <Typography gutterBottom className={cardCss.description}>
            12,65ads
          </Typography>
        </Box>
      </Box>
    </Card>
    <Card className={cardCss.boxitem} sx={{ left: "1108px", top: '450px' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={los}
        title="losangles"
        className={cardCss.img}
      />
      <Box className={cardCss.secondbox}>
        <Box className={cardCss.content}>
          <Typography gutterBottom className={cardCss.title}>
            Las Vegas, USA
          </Typography>
          <Typography gutterBottom className={cardCss.description}>
            12,65ads
          </Typography>
        </Box>
      </Box>
    </Card>
    </>
  );
}
