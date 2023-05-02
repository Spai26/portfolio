import style from "@/src/components/pagesStyles/Contact.module.css";
import emailjs from "@emailjs/browser";
import { contact } from "@/src/components/utils/home";
import { useRef, useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { initialState, validateFrom } from "@/src/components/utils/validated";
import { enqueueSnackbar, closeSnackbar } from "notistack";
const Contact = () => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  function handleOnChange(e) {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  }

  function handleBlur(e) {
    handleOnChange(e);
    setErrors(validateFrom(values));
  }

  function onSubmitForm(e) {
    e.preventDefault();

    setErrors(validateFrom(values));

    if (Object.values(errors).some((error) => error !== "")) {
      return enqueueSnackbar("valida los campos requeridos!", {
        variant: "error",
        preventDuplicate: true,
      });
    }
    emailjs
      .send("service_nmhan4q", "template_s268zk8", values, "0NHpcdXHFUJ0791eq")
      .then(
        (response) => {
          if (response) {
            enqueueSnackbar("Tu mensaje enviado!", {
              variant: "success",
              preventDuplicate: true,
            });
            setValues(initialState);
          }
        },
        (error) => {
          enqueueSnackbar("Lo siento, servicio no habilitado!", {
            variant: "warning",
            preventDuplicate: true,
          });
        }
      );
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

              <a
                href="https://www.linkedin.com/in/sergioai93/|||||||||"
                target="_blank"
              >
                <BsLinkedin />
              </a>
            </div>
            <div className={style.form}>
              <h4>{contact.form}</h4>
              <form id="contact-form" onSubmit={(e) => onSubmitForm(e)}>
                <div>
                  <input
                    type="text"
                    name="name"
                    value={values.name}
                    placeholder="Nombre *"
                    onChange={handleOnChange}
                    onBlur={handleBlur}
                    required
                  />
                  {errors && <p>{errors.name}</p>}
                </div>
                <div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      placeholder="Email *"
                      onChange={handleOnChange}
                      onBlur={handleBlur}
                      required
                    />
                    {errors && <p>{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={values.subject}
                    placeholder="Asunto *"
                    onChange={handleOnChange}
                    onBlur={handleBlur}
                    required
                  />
                  {errors && <p>{errors.subject}</p>}
                </div>
                <div>
                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    value={values.message}
                    placeholder="Mensaje *"
                    onChange={handleOnChange}
                    onBlur={handleBlur}
                    resize="none"
                    required
                  />
                  {errors && <p>{errors.message}</p>}
                </div>
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
