import React from 'react'

const Contact = () => {
  return (
    <aside id="contact-me">
    <a href="#">
      <i className="far fa-arrow-alt-circle-up"></i>
    </a>

    <header>
      <h1>Contact Me</h1>
      <p>Please feel free to drop a line with compliments and good vibes!</p>
    </header>

    <form action="#" method="post">

      <div className="form-field">
        <label for="user_name">Name</label> <br/>
        <input type="text" name="user_name" required />
      </div>

      <div className="form-field">
        <label for="user_email">Email</label> <br/>
        <input type="email" name="user_email" required />
      </div>

      <div className="form-field">
        <textarea name="message"></textarea>
      </div>
      <button type="submit">Submit</button> 
      <input type="submit" value="Contact me! 😃"/>

    </form>
  </aside>
  )
}

export default Contact;
