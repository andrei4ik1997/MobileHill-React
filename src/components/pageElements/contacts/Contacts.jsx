import { contacts1, contacts2 } from "../../../img/contacts";
import {
  faQuestionCircle,
  faAddressBook,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contacts.css";

export default function Contacts() {
  return (
    <main className="contacts">
      <h3 className="contacts__title">Контакты</h3>
      <div className="contacts__contaiter">
        <article className="contacts__appeal">
          <div className="contacts__appeal-title">Обращения</div>
          <div className="contacts__appeal-desc">
            если у вас возник вопрос - напишите нам mobilehill@gmail.com. Мы
            постараемся вам помочь!
          </div>
          <img alt="logo" className="contacts__appeal-logo1" src={contacts1} />
          <FontAwesomeIcon
            icon={faQuestionCircle}
            size="6x"
            className="contacts__appeal-icon"
          />
        </article>
        <article className="contacts__contact">
          <div className="contacts__contact-title">Наш телефон</div>
          <div className="contacts__contact-icon">
            <FontAwesomeIcon icon={faMobileAlt} size="6x" />
          </div>
          <div className="contacts__contact-desc">
            +77 (077) 777-77-77 звонки принимаются ежедневно с 10.00 до 19.00
          </div>
        </article>
      </div>
      <article className="contacts__adress">
        <div className="contacts__adress-title">Юридический адрес</div>
        <div className="contacts__adress-desc">
          222222, ввв ленинград, ввв точка ру
        </div>
        <img alt="logo" className="contacts__adress-logo2" src={contacts2} />
        <div className="contacts__adress-icon">
          <FontAwesomeIcon icon={faAddressBook} size="6x" />
        </div>
      </article>
    </main>
  );
}
