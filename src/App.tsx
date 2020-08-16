import React from 'react';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { teal, orange } from '@material-ui/core/colors';
import MicrowaveComponent from './screens/Microwave';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[900],
    },
    secondary: {
      main: orange[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MicrowaveComponent />
    </ThemeProvider>
  );
}

export default App;
