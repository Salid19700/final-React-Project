import { Box } from "@mui/material";
import TopCatCss from "./style.module.css"
import { Frame } from "./equipment";

import phone from './equipment/img/device-mobile.svg';
import pc from './equipment/img/monitor.svg';
import car from './equipment/img/car 1.svg';
import store from './equipment/img/storefront 1.svg';
import tool from './equipment/img/wrench 1.svg';
import home from './equipment/img/house-line 1.svg';



export function TopCat(){
    return(
        <Box component="div" className={TopCatCss.position}>
            <Frame alt="phone" img={phone} title={"Mobiles"} value={"2264521"} />
            <Frame alt="pc" img={pc} title={"electronics"} value={"2264521"} />
            <Frame alt="car" img={car} title={"Vehicles"} value={"2264521"} />
            <Frame alt="store" img={store} title={"Property"} value={"2264521"} />
            <Frame alt="tool" img={tool} title={"Essential"} value={"2264521"} />
            <Frame alt="home" img={home} title={"Home & Living"} value={"2264521"} />
        </Box>
    );
}