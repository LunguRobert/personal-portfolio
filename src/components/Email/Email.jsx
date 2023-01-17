import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Email.css";

export default function Email() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1pmfjij",
        "template_jyij0rd",
        form.current,
        "QuMl3G_rjrt1ojfkF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form">
      <h1 className="contact-me">Contact me</h1>
      <p className="contact-me-text">
        If you have other request or question, don't hesitate to contact me.
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <ul>
          <li className="half">
            <input
              placeholder="Name"
              type="text"
              onChange={(event) => setName(event.target.value)}
              value={name}
              name="name"
              required
            />
          </li>
          <li className="half">
            <input
              placeholder="Email"
              type="email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              name="email"
              required
            />
          </li>
          <li>
            <input
              placeholder="Subject"
              type="text"
              onChange={(event) => setSubject(event.target.value)}
              value={subject}
              name="subject"
              required
            />
          </li>
          <li>
            <textarea
              placeholder="Message"
              name="message"
              onChange={(event) => setMessage(event.target.value)}
              value={message}
              required
            ></textarea>
          </li>
          <li>
            <input type="submit" className="flat-button" value="SEND" />
          </li>
        </ul>
      </form>
    </div>
  );
}
