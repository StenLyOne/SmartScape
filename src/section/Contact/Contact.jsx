import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({ name: false, email: false });
  const [isSubmitted, setIsSubmitted] = useState(false); // Состояние для успешной отправки

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: false }); // Убираем ошибку при изменении
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { name: false, email: false };

    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = true;

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email) {
      setTimeout(() => {
        setIsSubmitted(true); 
      }, 2000); // Убираем сообщение через 5 секунд
      setTimeout(() => {
        setFormData({ name: "", email: "" }); // Сбрасываем форму после успешной отправки
        setIsSubmitted(true); // Убираем сообщение об успешной отправке
      }, 2000); // Убираем сообщение через 5 секунд
    }
  };

  return (
    <section id="contact">
      <div className="contact-container container">
        <p className="title">Contact Us</p>
        <div className="contact-content">
          <div className="contact-content-left">
            <h3>
              Ready to transform your home? <br />
              Reach out to us to discuss your vision, <br />
              and we’ll help bring it to life.
            </h3>
          </div>
          <div className="contact-content-right">
            <form onSubmit={handleSubmit} className="contact-form">
              {isSubmitted && (
                <div className="success-message">
                  <h3>Thank you!</h3>
                  <p>
                    Your message has been successfully sent. We’ll get back to
                    you shortly.
                  </p>
                </div>
              )}
              <div
                className={`contact-form-wrap ${
                  isSubmitted ? "submitted" : ""
                }`}
              >
                <div className="input-wrap">
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className={errors.email ? "error" : ""}
                  />
                  {errors.email && (
                    <p className="error-message">Please enter a valid email</p>
                  )}
                </div>
                <div className="input-wrap">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={errors.name ? "error" : ""}
                  />
                  {errors.name && (
                    <p className="error-message">Please enter your name</p>
                  )}
                </div>
                <button type="submit" className="contact-submit">
                  <span>Submit</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
