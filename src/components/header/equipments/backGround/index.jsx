import * as React from "react";
import HeaderCSS from "./style.module.css";

import A1 from "../backGround/img/ImagesA1.png";
import A2 from "../backGround/img/ImagesA2.png";
import A3 from "../backGround/img/ImagesA3.png";
import A4 from "../backGround/img/ImagesA4.png";
import A5 from "../backGround/img/ImagesA5.png";

import B1 from "../backGround/img/ImagesB1.png";
import B2 from "../backGround/img/ImagesB2.png";
import B3 from "../backGround/img/ImagesB3.png";
import B4 from "../backGround/img/ImagesB4.png";
import B5 from "../backGround/img/ImagesB5.png";

import C1 from "../backGround/img/ImagesC1.png";
import C2 from "../backGround/img/ImagesC2.png";
import C3 from "../backGround/img/ImagesC3.png";
import C4 from "../backGround/img/ImagesC4.png";

export function BackGroundImg() {
  return (
    <div className={HeaderCSS.cover}>
      <div className={HeaderCSS.banner}>
        <img className={HeaderCSS.img} src={A1} alt="Loading..." />
        <img className={HeaderCSS.img} src={A2} alt="Loading..." />
        <img className={HeaderCSS.img} src={A3} alt="Loading..." />
        <img className={HeaderCSS.img} src={A4} alt="Loading..." />
        <img className={HeaderCSS.img} src={A5} alt="Loading..." />

        <img className={HeaderCSS.img} src={B1} alt="Loading..." />
        <img className={HeaderCSS.img} src={B2} alt="Loading..." />
        <img className={HeaderCSS.img} src={B3} alt="Loading..." />
        <img className={HeaderCSS.img} src={B4} alt="Loading..." />
        <img className={HeaderCSS.img} src={B5} alt="Loading..." />

        <img className={HeaderCSS.img} src={C1} alt="Loading..." />
        <img className={HeaderCSS.img} src={C2} alt="Loading..." />
        <img className={HeaderCSS.img} src={C3} alt="Loading..." />
        <img className={HeaderCSS.img} src={C4} alt="Loading..." />
      </div>
    </div>
  );
}
