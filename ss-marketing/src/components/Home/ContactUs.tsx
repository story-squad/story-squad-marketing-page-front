import "./styles/ContactUs.css";

function ContactUs() {
  return (
    <div className="contactContainer">
      

        <div className="contactUsFormContainer">
        <h1>Contact Us</h1>
          <form>
              <div className='inputs'>

            <div className="field">
                <p>Full Name</p>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Your Name"
              />
            </div>

            <div className="field">
                <p>Email Address</p>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Your Email"
              />
            </div>
            </div>
            <div className="field">
                <p>message</p>
              <textarea
                className="textarea"
                name="message"
                placeholder="Write your message here."
              ></textarea>
            </div>

            <button type="submit" className="sendMessage">
              Submit
            </button>
          </form>
        </div>

    </div>
  );
}

export default ContactUs;
