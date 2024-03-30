import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Header } from '../header/Header';
import { Main } from '../learning/main';

export function MainLaoyut() {
  return (
    <React.Fragment>
      <CssBaseline />
        <Header />
        <Main />
    </React.Fragment>
  );
}