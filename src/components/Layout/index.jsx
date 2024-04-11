import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Header } from '../header/Header';
import { Main } from '../learning/main';
import { Feture } from '../featured';
import { PopularLocatin } from '../PopularLocation';
import { CardBanner } from '../card';

export function MainLaoyut() {
  return (
    <React.Fragment>
      <CssBaseline />
        <Header />
        <Main />
        <Feture />
        <PopularLocatin />
        <CardBanner />
    </React.Fragment>
  );
}