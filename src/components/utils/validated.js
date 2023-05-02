export const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export const validateFrom = (values) => {
  let errors = [];
  let regexemail = /\S+@\S+\.\S+/;
  let regexmessage = /^.{0,500}$/;

  if (!values.name) {
    errors.name = "Ingresa tu nombre completo.";
  }

  if (!values.email) {
    errors.email = "Ingresa un email válido.";
  } else if (!regexemail.test(values.email)) {
    errors.email = "Dirección de correo inválida";
  }

  if (!values.subject) {
    errors.subject = "Ingresa tu asunto.";
  }

  if (!values.message) {
    errors.message = "Ingresa un mensaje.";
  } else if (!regexmessage.test(values.message)) {
    errors.message = "Solo puede ingresar 500 caracteres";
  }
  return errors;
};
