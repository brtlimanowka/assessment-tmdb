import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primaryBackground: '#fff',
    secondaryBackground: '#eeeef0',
    primaryFont: '#000',
    secondaryFont: '#c4c4c4',
    primaryButton: '#e4e6f0',
    secondaryButton: '#c3f4ff',
    pagination: '#7e839a',
    highlight: '#0085e5',
  },
  shadow: '0 0 3px 3px rgba(185, 185, 185, 0.11)',
};

const Theme = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default Theme;
