import React, { Component } from 'react';
import './App.css';
// Import from MuiThemeProvider (http://www.material-ui.com/)
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import ContactForm from './Components/ContactForm';
import AppBar from 'material-ui/AppBar';
// Import MUI themes and colors
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {teal300} from 'material-ui/styles/colors';

const theme = getMuiTheme({
  palette: {primary1Color: teal300}
});

class App extends Component {
  render () {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <AppBar title='My Awesome Form' />
      </MuiThemeProvider>
    );
  }
}
export default App;
