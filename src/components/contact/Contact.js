import React, { useRef } from 'react'
import "./contact.css"
import { FaEnvelope, FaFacebookMessenger } from 'react-icons/fa'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9nyralr', 'template_v9lk5j9', form.current, 'QRXl64pFieyfiREa2')
      .then((result) => {
          console.log(result.text);
          
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id='contact'>
      <h2>Contact</h2>
      <h4 className='text-light'>Get in touch</h4>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FaEnvelope className='contact__icon' />
            <h4>Email</h4>
            <h5>samrat.subedi3950@gmail.com</h5>
            <a href="mailto:samrat.subedi3950@gmail.com" target="_blank" rel="noreferrer">Send email</a>
          </article>

          <article className="contact__option">
            <FaFacebookMessenger className='contact__icon' />
            <h4>Messenger</h4>
            <h5>Samrat Subedi</h5>
            <a href="https://www.facebook.com/profile.php?id=100034531357399" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Enter your full name' required />
          <input type="email" name='email' placeholder='Enter your email' required />
          <textarea name='message' rows='7' placeholder='Type a message' required />
          <div className="contact__btn">
            <button type='submit' className='btn btn-primary'>Send</button>
          </div>
        </form>
      </div>

    </section>
  )
}

export default Contact