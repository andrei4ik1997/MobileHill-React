import {
  title1,
  title2,
  delivery,
  items,
  sales,
  subscribe,
} from "../../../img/about";
import {
  faShippingFast,
  faPercent,
  faCartArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./about.css";

export default function About() {
  return (
    <main className="about">
      <div className="about__title">
        <div className="about__title-text">
          Добро пожаловать на
          <span className="about__title-text-name"> MobileHill</span>
        </div>
        <img alt="logo" className="about__title-logo1" src={title1} />
        <img alt="logo" className="about__title-logo2" src={title2} />
      </div>
      <section className="about__benefits">
        <div className="about__benefits-title">Наши преимущества</div>
        <div className="about__benefits-items">
          <article className="about__benefits-item">
            <img
              alt="logo"
              className="about__benefits-item-logo"
              src={delivery}
            />
            <div className="about__benefits-item-container">
              <div className="about__benefits-item-icon">
                <FontAwesomeIcon icon={faShippingFast} size="lg" />
              </div>

              <div className="about__benefits-item-desc">
                Доставка по всей Беларуси
              </div>
            </div>
          </article>
          <article className="about__benefits-item">
            <img alt="logo" className="about__benefits-item-logo" src={items} />
            <div className="about__benefits-item-container">
              <div className="about__benefits-item-icon">
                <FontAwesomeIcon icon={faCartArrowDown} size="lg" />
              </div>
              <div className="about__benefits-item-desc">
                Широкий ассортимент
              </div>
            </div>
          </article>
          <article className="about__benefits-item">
            <img alt="logo" className="about__benefits-item-logo" src={sales} />
            <div className="about__benefits-item-container">
              <div className="about__benefits-item-icon">
                <FontAwesomeIcon icon={faPercent} size="lg" />
              </div>
              <div className="about__benefits-item-desc">Скидки и акции</div>
            </div>
          </article>
        </div>
      </section>
      <section className="about__subscribe">
        <article className="about__subscribe-container">
          <div className="about__subscribe-title">Рассылка</div>
          <div className="about__subscribe-subscr">
            Будь в курсе новинок и акции, а также пополнения ассортимента
          </div>
          <div className="about__subscribe-input-container">
            <input
              className="about__subscribe-input"
              placeholder="Ваш e-mail"
            ></input>
            <button className="about__subscribe-button">Подписаться</button>
          </div>
        </article>
        <img alt="logo" className="about__subscribe-logo" src={subscribe} />
      </section>
    </main>
  );
}
