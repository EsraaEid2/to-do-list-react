import React from 'react';
import '../Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>If you would like to get in touch, feel free to reach out through the following:</p>
      <ul>
        <li>Email: <a href="mailto:esraa.eidd2@gmail.com">esraa.eidd2@gmail.com</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/esra-a-eid-a489b3280/" target="_blank" rel="noopener noreferrer">Esra'a Eid</a></li>
        <li>GitHub: <a href="https://github.com/EsraaEid2" target="_blank" rel="noopener noreferrer">Esra'a Eid</a></li>
      </ul>
    </div>
  );
};

export default Contact