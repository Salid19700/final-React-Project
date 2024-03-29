import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import FrameCss from './style.module.css';

export function Frame({alt, img, title, value}) {
  return (
    <Card className={FrameCss.size}>
      <CardMedia
        component="img"
        alt={alt}
        image={img}
        className={FrameCss.logo}
      />
      <CardContent>
        <Typography gutterBottom component="h5"  className={FrameCss.title}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className={FrameCss.value}>
            {value}
        </Typography>
      </CardContent>
    </Card>
  );
}
