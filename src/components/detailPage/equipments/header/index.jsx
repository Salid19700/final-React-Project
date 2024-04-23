import { Box } from "@mui/material";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';

import LogoHeader from "./img/State=False.svg";
import careDown from "./img/CaretRight.svg";
import MessageIcon from "@mui/icons-material/Message";
import chatAvator from "./img/Chat.png";
import Pluse from "../../../header/equipments/navigation/img/PlusCircleplus.svg";

import headerCss from "./style.module.css";


function PlusIcone() {
  return <img src={Pluse} alt="plus" />;
}
export function HeaderDetaile() {
  return (
    <>
      <Box component="section" className={headerCss.box}>
        <Box component="header" className={headerCss.header}>
          <nav className={headerCss.navigation}>
            <ul className={headerCss.rightBox}>
              <li>
                <img src={LogoHeader} alt="Logo" className={headerCss.logo} />
              </li>
              <li>
                <Typography variant="body">
                  Home
                  <img
                    src={careDown}
                    alt="CareDown"
                    className={headerCss.scrolLogo}
                  />
                </Typography>
              </li>
              <li>
                <Typography variant="body">listing</Typography>
              </li>
              <li>
                <Typography variant="body">
                  Pages
                  <img src={careDown} alt="CareDown" />
                </Typography>
              </li>
              <li>
                <Typography variant="body">Get Membership</Typography>
              </li>
              <li>
                <Typography variant="body">Contact</Typography>
              </li>
            </ul>

            <ul className={headerCss.leftBox}>
              <li>
                <Badge color="secondary" variant="dot">
                  <MessageIcon />
                </Badge>
              </li>
              <li>
                <Stack direction="row" spacing={2}>
                  <Avatar alt="Remy Sharp" src={chatAvator} />
                </Stack>
              </li>
              <li>
                {" "}
                <Button variant="contained" size="medium" startIcon={<PlusIcone/>}>
                  Medium
                </Button>
              </li>
            </ul>
          </nav>
        </Box>
      </Box>
    </>
  );
}
