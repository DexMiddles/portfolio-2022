import "../../styles/components/Contact/Contact.css";
const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="contact-section">
          <div className="contact-container">
            <form
              action="https://getform.io/f/c9745ec0-ff47-4608-b7d6-184b9fe03ddd"
              method="POST"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                required
              />
              <input
                className="email-field"
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
              <input
                className="message"
                type="text"
                name="message"
                placeholder="Message"
                required
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
