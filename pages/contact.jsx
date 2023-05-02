import style from "@/src/components/pagesStyles/Contact.module.css";
import emailjs from "@emailjs/browser";
import { contact } from "@/src/components/utils/home";
import { useRef, useState } from "react";
import { BsLinkedin } from "react-icons/bs";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState(null);
  const form = useRef();
  function handleOnChange(e) {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  }

  function onSubmitForm(e) {
    e.preventDefault();
    if (!name.length || !email.length || !message.length || !subject.length) {
      setErrors(true);
      clearError();
    }

    emailjs
      .send("service_nmhan4q", "template_s268zk8", values, "0NHpcdXHFUJ0791eq")
      .then(
        (response) => {
          setErrors(false);
          clearError();
          setValues(initialState);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  function clearError() {
    setTimeout(() => {
      setErrors(null);
    }, 2000);
  }
  return (
    <section id="contactme" className="pp-section pp-scrollable ">
      <div className="container">
        <div className={style.data}>
          <div className={style.text}>
            <h3>{contact.title}</h3>
          </div>
          <div className={style.contact}>
            <div className={style.contact_info}>
              <h4>{contact.subtitle}</h4>
              <p>{contact.description}</p>

              <a href="#" target="_blank">
                <BsLinkedin />
              </a>
            </div>
            <div className={style.form}>
              <h4>{contact.form}</h4>
              <form
                id="contact-form"
                onSubmit={(e) => onSubmitForm(e)}
                ref={form}
              >
                <div>
                  <input
                    type="text"
                    name="name"
                    value={values.name}
                    placeholder="Nombre *"
                    onChange={handleOnChange}
                  />
                </div>
                <div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      placeholder="Email *"
                      onChange={handleOnChange}
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={values.subject}
                    placeholder="Asunto *"
                    onChange={handleOnChange}
                  />
                </div>
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  value={values.message}
                  placeholder="Mensaje *"
                  onChange={handleOnChange}
                ></textarea>
                <button className="btn" type="submit">
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
