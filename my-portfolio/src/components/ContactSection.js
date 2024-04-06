import React from 'react';

function ContactSection() {
  return (
    <div className="container contact-section" id="contact-me">
      <h2 className="text-center">Contact Me</h2>
      <p className="text-center lead">Feel free to drop me a message below!</p>
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <form action="https://formspree.io/f/xoqgjolr" method="POST">
            <div className="mb-3">
              <label htmlFor="name" className="form-label darker-label">Name</label>
              <input type="text" name="name" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label darker-label">Email</label>
              <input type="email" name="_replyto" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label darker-label">Message</label>
              <textarea name="message" className="form-control" id="message" rows="3" placeholder="Your message"></textarea>
            </div>
            <div className="d-grid mb-4">
              <button type="submit" className="btn submit-btn">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
