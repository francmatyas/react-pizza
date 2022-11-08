import "./Contact.scss";

import Banner from "../../assets/banner.png";

import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__banner">
        <img src={Banner} />
      </div>

      <div className="contact__content">
        <h1 className="contact__title">Contact Us</h1>
        <div className="contact__form">
          <form>
            <input
              className="contact__input"
              type="text"
              placeholder="Full name"
            />
            <input
              className="contact__input"
              type="email"
              placeholder="E-mail"
            />
            <textarea
              className="contact__input"
              type="text"
              placeholder="Message"
            />
            <button className="contact__button">Contact Us</button>
          </form>
          <div className="contact__socials">
            <AiOutlineInstagram className="contact__socials-icon" />
            <AiOutlineFacebook className="contact__socials-icon" />
            <AiOutlineTwitter className="contact__socials-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
