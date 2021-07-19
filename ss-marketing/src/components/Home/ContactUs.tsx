import "./styles/ContactUs.css";

function ContactUs() {
  return (
    <div className="contactContainer">
      

        <div className="contactUsFormContainer">
        <h1>Contact Us</h1>
          <form>
              <div className='inputs'>
            <div className="field">
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Your Name"
              />
            </div>

            <div className="field">
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Your Email"
              />
            </div>
            </div>
            <div className="field">
              <textarea
                className="textarea"
                name="message"
                placeholder="What's on your mind?"
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
