const ContactMe = () => {
  return (
    <div className="contact-me">
      <p className="h1">Contact Me</p>
      <form className="d-flex flex-inline flex-column">
        <div className="mb-3">
          <input placeholder="Enter Name" />
          <input placeholder="Enter Email Address" />
        </div>
        <div className="mb-6">
          <textarea placeholder="Type your message..." />
        </div>
        <div className="mb-3">
          <button className="btn btn-success" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
export default ContactMe;
