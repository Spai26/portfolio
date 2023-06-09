import work1 from "/public/ediciones_lexicom.jpg";
import work2 from "/public/aes.png";

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
          text: "Configuración de equipos locales, servidores para el uso de su sistema personal SOFTCOM. de facturación",
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
  title: "Contact me.",
  subtitle: "Quieres mejorar tu negocio?",
  description:
    "Me encantaría tener la oportunidad de contribuir con mi experiencia y habilidades en tu proyecto. Puedes obtener más información de mí en mi perfil de LinkedIn. ¡Espero tu contacto!",
  form: "escribeme",
};

import { CgGames } from "react-icons/cg";
import { GiSpaceship } from "react-icons/gi";
import { BsHeartPulse } from "react-icons/bs";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";
import {
  SiReact,
  SiPhp,
  SiMongodb,
  SiJavascript,
  SiPostgresql,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";

export const porftfolio = {
  title: "my Portfolio.",
  works: [
    {
      title: "Videogames",
      icon: <CgGames />,
      description:
        "En este proyecto se aplicó un SPA con landing page, donde se aplico RES API con Rawg, en el cual se integro un CRUD básico solo se uso una lista de 100 items, con manejo de filtrado, ordenamiento, busqueda, creación y detalle del videojuego. Puedes ver el resultado en.",

      repo: "https://github.com/Spai26/PI-videogames.git",
      page: "",
      tols: [
        { icon: <SiJavascript /> },
        { icon: <SiPostgresql /> },
        { icon: <SiReact /> },
        { icon: <SiNodedotjs /> },
        { icon: <SiNextdotjs /> },
        { icon: <SiExpress /> },
      ],
    },
    {
      title: "Rick & Morty",
      icon: <GiSpaceship />,
      description:
        "En este proyecto, se aplicó un SPA, con login básico, renderizado de The Rick and Morty API, donde se aplicó filtrados, ordenamientos, lista favoritos, busqueda. Puede ver el resultado en.",
      tols: [
        { icon: <SiJavascript /> },
        { icon: <SiReact /> },
        { icon: <SiNodedotjs /> },
        { icon: <SiNextdotjs /> },
        { icon: <SiExpress /> },
      ],
      repo: "https://github.com/Spai26/Rick-and-Morty-API.git",
      page: "",
    },
    {
      title: "AES",
      icon: <BsHeartPulse />,
      description:
        "En este proyecto, hemos creado una SPA de educación sanitaria en el que nos enfocamos en atraer a los usuarios para que puedan ayudar socialmente a personas que lo necesiten. Puede visitar el resultado en. ",
      tols: [
        { icon: <SiMongodb /> },
        { icon: <SiNodedotjs /> },
        { icon: <SiNextdotjs /> },
        { icon: <SiExpress /> },
        { icon: <AiOutlineCloudUpload /> },
        { icon: <BiMailSend /> },
      ],
      repo: "https://github.com/Spai26/AES_bakend.git",
      page: "https://educacionsanitaria.org/",
    },
  ],
};
