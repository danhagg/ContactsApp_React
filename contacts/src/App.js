import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ContactForm from './Components/ContactForm';
import AppBar from 'material-ui/AppBar';
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
        <ContactForm />
      </MuiThemeProvider>
    );
  }
}
export default App;
