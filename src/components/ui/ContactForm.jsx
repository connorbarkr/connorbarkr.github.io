import React, { Component } from 'react';
import axios from 'axios';

import '../../scss/contact.scss';

class ContactForm extends Component {

  state = {
    name: null,
    msg: null,
    email: null,
    sent: false,
  };

  submit = (e) => {
    const {name, msg, email} = this.state;

    e.preventDefault();
    axios({
      method: 'POST',
      url : 'https://google.com', //nice try fbi
      data: {
        name: name,
        email: email,
        msg: msg,
      },
      crossDomain: 'true',
    }).then((response) => {
      if (response.status === 200) {
        this.setState({sent: true});
      } else {
        alert("Something went wrong! Check your connection, or try again in a few minutes.");
      }
    });
  }

  sendAgain = () => {
    this.setState({sent: false});
  }

  updateName = (e) => {
    this.setState({name: e.target.value});
  }

  updateMsg = (e) => {
    this.setState({msg: e.target.value});
  }

  updateEmail = (e) => {
    this.setState({email: e.target.value});
  }

  render() {
    const {sent} = this.state;
    return (
      <div>
        {sent ?
          <div className='d-flex flex-column justify-content-center align-items-center contact-again'>
            <h2>{'Thanks for getting in touch!'}</h2>
            <button onClick={this.sendAgain}>{'contact again'}</button>
          </div> :
          <form id='contact-form' className='d-flex flex-column justify-content-center align-items-center' method='POST'>
            <fieldset class='contact-field contact-name'>
              <input id='name' placeholder='name' onBlur={this.updateName} />
            </fieldset>
            <fieldset class='contact-field contact-message'>
              <textarea rows={1} id='message' placeholder='message' onBlur={this.updateMsg} />
            </fieldset>
            <fieldset class='contact-field contact-email'>
              <input id='email' type='email' placeholder='email' onBlur={this.updateEmail} />
            </fieldset>
            <button type='button' className='contact-button' onClick={this.submit}>{'send'}</button>
          </form>
        }
      </div>
    );
  };
}

export default ContactForm;
