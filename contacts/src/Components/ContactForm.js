import React, { Component } from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import uuid from 'uuid';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '',
                            email: '',
                            phone: '',
                            address: '',
                            city: '',
                            state: '',
                            zip: '',
                            contacts: []
        }
    }

    update_state(event, key) {
        this.setState({[key]: event.target.value});
    }

    //
    handle_submit(event) {
        console.log('Submitted: ', this.state);
        //create a unique id for each contact using the 'uid' package.
        let contact = {
            key: uuid.v4(),
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
        };
        //you cannot change the state directly so you must create a temporary array into which you can push contact
        let tempArray = this.state.contacts;
        tempArray.push(contact);
        //reset the text fields to empty when the submit button is pushed.
        this.setState({contacts: tempArray,
                                name: '',
                                email: '',
                                phone: '',
                                address: '',
                                city: '',
                                state: '',
                                zip: ''});
        event.preventDefault();
    }

    //create a raised button by importing the RaisedButton component from Material-UI
    //change 'defaultvalue' to 'value'.
    //renderList is called within the <ol> and generates a list of contacts
    render() {
        let renderList = this.state.contacts.map((c)=>{
            return (
                <li key={c.key}>{c.name}: {c.address}</li>
            )
        })
        return (
            <div>
                <Card className="md-card">
                    <form onSubmit={event => this.handle_submit(event)}>
                        <CardTitle title="Add Contact" subtitle=""/>
                        <CardText>
                            <TextField floatingLabelText="Name"
                                value={this.state.name}
                                onChange={event => this.update_state(event, 'name')}
                                hintText="Name"
                            />
                            <br />
                            <TextField floatingLabelText="Email"
                                value={this.state.email}
                                onChange={event => this.update_state(event, 'email')}
                                hintText="Email"
                            />
                            <br />
                            <TextField floatingLabelText="Phone"
                                value={this.state.phone}
                                onChange={event => this.update_state(event, 'phone')}
                                hintText="Phone"
                            />
                            <br />
                            <TextField floatingLabelText="Address"
                                value={this.state.address}
                                onChange={event => this.update_state(event, 'address')}
                                hintText="Email"
                            />
                            <br />
                            <TextField floatingLabelText="City"
                                value={this.state.city}
                                onChange={event => this.update_state(event, 'city')}
                                hintText="City"
                            />
                            <br />
                            <TextField floatingLabelText="State"
                                value={this.state.state}
                                onChange={event => this.update_state(event, 'state')}
                                hintText="State"
                            />
                            <br />
                            <TextField floatingLabelText="Zip"
                                value={this.state.zip}
                                onChange={event => this.update_state(event, 'zip')}
                                hintText="Zip"
                            />
                            <br />
                        </CardText>
                        <CardActions>
                            <RaisedButton label="Submit" type="submit" primary={true}/>
                        </CardActions>
                    </form>
                    <ol>
                        {renderList}
                    </ol>
                </Card>
            </div>

        )

    }
}
export default ContactForm;
