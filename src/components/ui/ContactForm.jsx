import React from 'react';

import '../../scss/contact.scss';

//TODO build your own email submission thing in React

const ContactForm = () => {
  return (
    <div>
      <form className='d-flex flex-column justify-content-center align-items-center' id='gform' method='POST' data-email='example@email.net' action='https://script.google.com/macros/s/AKfycbwEMBsVsikS2loIk1okuUKkyokfBSGrxzhWeW-NG7lD-q7KnzY/exec'>
        <fieldset class='contact-field contact-name'>
          <input id='name' name='name' placeholder='name' />
        </fieldset>
        <fieldset class='contact-field contact-message'>
          <textarea rows={1} id='message' name='message' placeholder='message' />
        </fieldset>
        <fieldset class='contact-field contact-email'>
          <input id='email' name='email' type='email' required placeholder='email' />
        </fieldset>
        <button class='contact-button'>{'send'}</button>
      </form>
      <script data-cfasync='false' type='text/javascript' src='https://cdn.rawgit.com/dwyl/html-form-send-email-via-google-script-without-server/master/form-submission-handler.js' />
    </div>
  );
};

export default ContactForm;
