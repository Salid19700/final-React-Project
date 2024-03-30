import { Card, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardCss from "./style.module.css";

export function MediaCard({img, rank, title, description}) {
  return (
    <Card className={CardCss.media}>
      <CardMedia
        component="img"
        image={img}
        alt="Person"
        className={CardCss.img}
      />
      <Typography gutterBottom className={CardCss.rank}>
        {rank}
      </Typography>

        <Typography gutterBottom variant="h3" className={CardCss.title}>
          {title}
        </Typography>
        <Typography gutterBottom variant="body" className={CardCss.desc}>
          {description}
        </Typography>

    </Card>
  );
}
