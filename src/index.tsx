import React from 'react';
import ReactDom from 'react-dom';
import GlobalStyle from './globalStyle';
import { MainPage } from './Pages';

const root = document.getElementById('root');
ReactDom.render(
  <>
    <GlobalStyle />
    <MainPage />
  </>,
  root
);
