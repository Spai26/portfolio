import work1 from "../assets/ediciones_lexicom.jpg";
import work2 from "../assets/aes.png";

export const life = {
  name: "sergio avalos",
  bio: "Me encanta trabajar en equipo y colaborar con otros programadores para resolver desafíos y alcanzar objetivos compartidos. Estoy emocionado de seguir creciendo en mi carrera como programador y ansioso por explorar nuevas  oportunidades.",
};

export const aboutme = {
  title: "About me.",
  subtitle: "Soy Desarrollador Web Full Stack.",
  description:
    "Soy un ingeniero de sistemas de Perú con experiencia en el desarrollo de proyectos con diversas tecnologías. He consolidado mis habilidades en un Bootcamp y he trabajado en equipo para resolver complejidades en el camino. Me apasiona aprender y encontrar soluciones creativas a los problemas. Puedes encontrar más detalles sobre mis habilidades técnicas y proyectos en los botones a continuación.",
  extras:
    "En mi tiempo libre, disfruto de actividades al aire libre y también me gusta leer y aprender sobre nuevas tecnologías y tendencias en mi campo.",
};

export const experience = {
  title: "Experience.",
  works: [
    {
      title: "Ediciones lexicom",
      icon: work1,
      date: "Sep. 2019 - mar. 2020",
      cargo: "Asistente de gestión operativa y seguridad de la información",
      type: "full time",
      description: [
        {
          text: "Brindar soporte técnico nivel 3 por teléfono, conexión remota o presencial en los diferentes puntos de ventas.",
        },
        {
          text: "Configuración de equipos locales, servidores para el uso de su sistema personal SOFTCOM.",
        },
        {
          text: "Desarrollo de migración de proyecto de escritorio SOFTCOM a web utilizando .NET, SQL.",
        },
        {
          text: "Configuración e instalación de conexiones de cableado estructurado para los servidores o usuarios de la empresa.",
        },
      ],
    },
    {
      title: "Asociación de Educación Sanitaria",
      icon: work2,
      date: "Mar 28 - abr. 20 2020",
      cargo: "Desarrollador Web - Backend",
      type: "pasantia",
      description: [
        {
          text: "Modelo y estructura de carpetas con MVC, Node.js, Express, manejo de errores",
        },
        {
          text: "Diseño de modelos de base de datos con MongoDB y su librería Mongoose.",
        },
        {
          text: "Sistema de autentificación con JWT y generación de roles; protección y perseverancia de la información y de sus rutas.",
        },
        {
          text: "Envió de mensajería para los usuarios suscritos al blog, utilizando Sengrid",
        },
        {
          text: "Almacenamiento de recursos imágenes, videos (link) y archivos .pdf en su sistema a gestionar",
        },
      ],
    },
  ],
};

export const contact = {
  description:
    "Me encantaría tener la oportunidad de contribuir con mi experiencia y habilidades en tu proyecto.",
};

export const porftfolio = [
  {
    title: "Videogames",
    icon: work1,
    description: "",
    repositorio: "https://github.com/Spai26/PI-videogames.git",
    urlb: "",
    urlb: "",
  },
  {
    title: "Ediciones lexicom",
    icon: work1,
    description: "",
    repositorio: "https://github.com/Spai26/Rick-and-Morty-API.git",
    urlb: "",
    urlb: "",
  },
];
