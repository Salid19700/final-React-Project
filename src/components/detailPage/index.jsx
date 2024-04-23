import React from "react";
import { HeaderDetaile } from "./equipments/header";
import { Banner } from "./equipments/banner";

export function PosterPage(){
    return(
        <React.Fragment>
            <HeaderDetaile />
            <Banner />
        </React.Fragment>
    );
}