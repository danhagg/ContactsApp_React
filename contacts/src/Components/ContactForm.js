import React, { Component } from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class ContactForm extends Component {
  constructor(props) {
  super(props);
  this.state = {name: ''};
}

update_state(event, key) {
  console.log(event.target);
  this.setState({[key]: event.target.value});
}

handle_submit(event) {
  console.log('Submitted: ', this.state);
  event.preventDefault();
}

  render () {
    return (
      <Card className="md-card">
        <form onSubmit={event => this.handle_submit(event)}>
          <CardTitle title="My Form" subtitle="subtitle"/>
          <CardText>
            <div>

              <TextField floatingLabelText="Name"
                defaultValue={this.state.name}
                onChange={event => this.update_state(event, 'name')}/>

              <br />
              <TextField
                hintText="Email"
              /><br />
              <TextField
                hintText="Phone"
              /><br />
              <br />
              <TextField
                hintText="Address"
              /><br />
              <TextField
                hintText="City"
              /><br />
              <br />
              <TextField
                hintText="State"
              /><br />
              <TextField
                hintText="Zip"
              /><br />
            </div>
          </CardText>
          <CardActions>
            <RaisedButton label="Submit" primary={true}/>
          </CardActions>
        </form>
      </Card>
    );
  }
}
export default ContactForm;
