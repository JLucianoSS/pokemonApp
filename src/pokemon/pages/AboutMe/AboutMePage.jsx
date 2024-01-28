import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import style from "./About.module.scss";

export const AboutMePage = () => {
  return (
    <div className={style.container_about}>
      <div className={style.container_info}>
        <div className={style.conteiner_head}>
          <img alt="dev" src="assets/dev.jpeg" />
          <div className={style.container_name_desc}>
            <h1>Jorge Sánchez</h1>
            <p>
              Proyecto hecho con React, Redux, Node.js, Express y PostgreSQL. Se
              destaca el manejo de hooks, estados locales y globales con Redux.
              Altamente comprometido, siempre dispuesto a investigar más y
              resolver desafíos en busca de soluciones óptimas.
            </p>
          </div>
        </div>

        <div className={style.container_contact}>
          <a href="https://github.com/JLucianoSS" target="_blank">
            <img src="/assets/git.svg" alt="git" />
          </a>
          <a
            href="https://www.linkedin.com/in/jorge-sanchez-191674276/"
            target="_blank"
          >
            <img src="/assets/linkedin.svg" alt="git" />
          </a>
        </div>
      </div>
    </div>
  );
};
