import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from "@material-ui/styles";
import Header from './components/Header';

const theme = {
  spacing: '8px'
}

render(<ThemeProvider theme={theme}><Header /></ThemeProvider>, document.getElementById('root'));
