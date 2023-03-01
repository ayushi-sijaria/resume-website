const ContactMe = () => {
  return (
    <div className="contact-me">
      <p className="h1">Contact Me</p>
      <form className="d-flex flex-inline flex-column">
        <input placeholder="Enter Name" />
        <input placeholder="Enter Email Address" />
        <textarea placeholder="Type your message..." />
      </form>
    </div>
  );
};
export default ContactMe;
