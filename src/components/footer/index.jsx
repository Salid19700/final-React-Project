import { Box, Button, Typography } from "@mui/material";

import footerCss from "./style.module.css";
import ContainerCss from "../container/style.module.css";

import Logo from "./img/Logo.svg";
export function FooterBar(){
    return(
      <>
        <Box component="section" className={footerCss.box}>
                  <Box className={ContainerCss.contain}>
                    <Box sx={{display: 'flex'}}>
                    <ul className={footerCss.contactbox}>
                       <li><img src={Logo} alt='' /></li>
                       <li><Typography gutterBottom className={footerCss.content}>4517 Washington Ave. Manchester, Kentucky 39495</Typography></li>
                       <li><Typography gutterBottom className={footerCss.content}>Phone: (405) 555-0128</Typography></li>
                       <li><Typography gutterBottom className={footerCss.content}>Mail: Adfinity@gmail.com</Typography></li>
                    </ul>

                    <ul style={{width: "175px", height: "216px"}}>
                        <li><Typography gutterBottom className={footerCss.contenttitle}>Supports</Typography></li>
                       <li><Typography gutterBottom className={footerCss.content}>Contact</Typography></li>
                       <li><Typography gutterBottom className={footerCss.content}>FAQs</Typography></li>
                       <li><Typography gutterBottom className={footerCss.content}>Pricing Plans</Typography></li>
                       <li><Typography gutterBottom className={footerCss.content}>Sitemap</Typography></li>
                    </ul>

                    <ul style={{width: "175px", height: "216px"}}>
                       <li><Typography gutterBottom className={footerCss.contenttitle}>Quick Links</Typography></li>
                       <li><Typography gutterBottom className={footerCss.content}>About</Typography></li>
                       <li><Typography gutterBottom className={footerCss.content}>Get Membership</Typography></li>
                       <li><Typography gutterBottom className={footerCss.content}>Post a Ads</Typography></li>
                       <li><Typography gutterBottom className={footerCss.content}>Blog</Typography></li>
                    </ul>

                    <ul>
                       <li><Typography gutterBottom className={footerCss.contenttitle}>Category</Typography></li>
                       <li><Typography gutterBottom className={footerCss.content}>Mobile</Typography></li>
                       <li><Typography gutterBottom className={footerCss.content}>Electronics</Typography></li>
                       <li><Typography gutterBottom className={footerCss.content}>Vehicles</Typography></li>
                       <li><Typography gutterBottom className={footerCss.content}>Property</Typography></li>
                    </ul>
                    </Box>
                  </Box>
        </Box>
        <Box>
         
        </Box>
        </>
    );
}