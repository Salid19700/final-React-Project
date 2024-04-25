import React, { useState } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import imageCss from "./style.module.css";
import fullIcone from "./img/CornersOut.svg";
import careleft from "./img/CaretLeft.svg";
import careright from "./img/CaretLeft (1).svg";

export function CustomPaging() {
  const imgs = [
    { id: 0, value: "https://placehold.co/600x600" },
    { id: 1, value: "https://placehold.co/500x500" },
    { id: 2, value: "https://placehold.co/400x400" },
    { id: 3, value: "https://placehold.co/300x300" },
    { id: 4, value: "https://placehold.co/600x600" },
    { id: 5, value: "https://placehold.co/500x500" },
  ];

  const [sliderData, setSliderData] = useState(imgs[0]);

  const handelClick = (index) => {
    console.log(index);
    const slider = imgs[index];
    setSliderData(slider);
  };
  return (
    <Box>
      <Box className={imageCss.boxitem}>
        <img className={imageCss.mainimg} src={sliderData.value} />
        <Typography className={imageCss.fullicone}>
          <img src={fullIcone} />
        </Typography>
      </Box>

      <Box className={imageCss.tumbnail}>
        <Typography className={imageCss.cares}>
          <img src={careleft} />
        </Typography>
        {imgs.map((data, index) => {
          return (
            <img
              key={data.id}
              src={data.value}
              onClick={() => handelClick(index)}
              height="112"
              width="112"
              className={imageCss.imgbar}
            />
          );
        })}
                <Typography className={imageCss.cares}>
          <img src={careright} />
        </Typography>
      </Box>
    </Box>
  );
}
