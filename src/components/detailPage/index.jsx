import React from "react";
import { HeaderDetaile } from "./equipments/header";
import { Banner } from "./equipments/banner";
import { MainBox } from "./equipments/leftBox";

export function PosterPage(){
    return(
        <React.Fragment>
            <HeaderDetaile />
            <Banner />
            <MainBox />
        </React.Fragment>
    );
}