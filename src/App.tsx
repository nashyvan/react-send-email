import React, { useRef } from 'react';
import './App.css';
import emailjs from '@emailjs/browser';

function App() {
  const form:any = useRef();

  const sendEmail = (e:any) => {
    e.preventDefault();

    // @ts-ignore
    emailjs.sendForm(process.env.REACT_APP_SERVICEID, process.env.REACT_APP_TEMPLATEID, form.current, process.env.REACT_APP_PUBLICKEY)
      .then((result:any) => {
        console.log(result.text);
      }, (error:any) => {
        console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}

export default App;
