import React, { Component } from 'react';
import axios from 'axios';

import '../../scss/contact.scss';

class ContactForm extends Component {

  state = {
    name: null,
    msg: null,
    email: null,
    sent: false,
    sending: false,
  };

  submit = (e) => {
    const {name, msg, email} = this.state;
    let emailValidator = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    e.preventDefault();
    if (!name || name.length === 0) {
      alert("Please complete the name field.");
      return;
    } else if (!msg || msg.length === 0) {
      alert("Please complete the message field.");
      return;
    } else if (!email || email.length === 0) {
      alert("Please complete the email field.");
      return;
    } else if (!emailValidator.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    this.setState({sending: true}, () => {
      axios({
        method: 'POST',
        url : 'https://google.com/', //nice try fbi
        data: {
          name: name,
          email: email,
          msg: msg,
        },
        crossDomain: 'true',
      }).then((response) => {
        if (response.status === 200) {
          this.setState({sent: true, sending: false});
        } else {
          this.setState({sent: false, sending: false}, () => {
            alert("Something went wrong! Check your connection, or try again in a few minutes.");
          });
        }
      });
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
    const {sending, sent} = this.state;
    return (
      <div>
        {sending ?
          <div className='d-flex flex-column justify-content-center align-items-center contact-again'>
            <h2>{'Sending...'}</h2>
          </div> :
          sent ?
            <div className='d-flex flex-column justify-content-center align-items-center contact-again'>
              <h2>{'Thanks for getting in touch!'}</h2>
              <button onClick={this.sendAgain}>{'contact again'}</button>
            </div> :
            <div id='contact-form' className='d-flex flex-column justify-content-center align-items-center' method='POST'>
              <div class='contact-field contact-name'>
                <input id='name' placeholder='name' onBlur={this.updateName} />
              </div>
              <div class='contact-field contact-message'>
                <textarea rows={1} id='message' placeholder='message' onBlur={this.updateMsg} />
              </div>
              <div class='contact-field contact-email'>
                <input id='email' type='email' placeholder='email' onBlur={this.updateEmail} />
              </div>
              <button type='button' className='contact-button' onClick={this.submit}>{'send'}</button>
            </div>
        }
      </div>
    );
  };
}

export default ContactForm;
