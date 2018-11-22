import React from 'react';

//TODO build your own email submission thing in React

const ContactForm = () => {
  return (
    <div>
      <form id='gform' method='POST' data-email='example@email.net' action='https://script.google.com/macros/s/AKfycbwEMBsVsikS2loIk1okuUKkyokfBSGrxzhWeW-NG7lD-q7KnzY/exec'>
        <fieldset class='name'>
          <input id='name' name='name' placeholder='name' />
        </fieldset>
        <fieldset class='message'>
          <textarea id='message' name='message' placeholder='message' />
        </fieldset>
        <fieldset class='email'>
          <input id='email' name='email' type='email' required placeholder='Email' />
        </fieldset>
        <button class='button-success'>{'send'}</button>
      </form>
      <script data-cfasync='false' type='text/javascript' src='https://cdn.rawgit.com/dwyl/html-form-send-email-via-google-script-without-server/master/form-submission-handler.js' />
    </div>
  );
};

export default ContactForm;
