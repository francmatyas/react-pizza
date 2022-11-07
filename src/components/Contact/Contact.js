import "./Contact.scss"

import Banner from "../../assets/banner.png"

function Contact () {
  return (
    <div className="contact">
      <h1 className="contact__title">Contact Us</h1>
      <img src={Banner} className="contact__banner"/>
      <form>
        <input className="contact__input" type="text" placeholder="Full name" />
        <input className="contact__input" type="email" placeholder="E-mail" />
        <textarea className="contact__input" type="text" placeholder="Message" />
        <button className="contact__button">Contact Us</button>
      </form>
    </div>
  )
}
export default Contact