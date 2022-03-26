import './Contacts.css'
import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import img4 from './img/img4.png'


export const Contacts = () => {
  return (
    <section className="contacts_container">
      <div className="msg">
        <hr />
        <p>
          Связаться <span>с нами</span>
        </p>
      </div>
      <div className="contacts">
        <div className="address">
          <div>
            <p>Офис</p>
            <span>Москва, ул. Уличная, д.1, оф. 1</span>
          </div>
          <div>
            <p>E-mail</p>
            <span>company@company.com</span>
          </div>
          <p>Социальные сети</p>
          <div className="social_links">
            <img src={img1} alt='' />
            <img src={img2} alt='' />
            <img src={img3} alt='' />
            <img src={img4} alt='' />
          </div>
        </div>
        <div className="time">
          <div>
            <p>Режим работы</p>
            <span>Пн-Вт: 10.00 — 19.00; Сб-Вс: 10.00 — 15.00</span>
          </div>
          <div>
            <p>Телефон</p>
            <span>8 (900) 900-00-00</span>
          </div>
        </div>
        <div className="quest_form">
          <p>Остались вопросы?</p>
          <span>Ваше имя</span>
          <input placeholder="Иван Иванов" />
          <span>Телефон/E-mail</span>
          <input placeholder="example@axample.com" />
          <span>Ваше сообщение</span>
          <input placeholder="Текст обращения" />
          <span className="priv_policy">
            Нажимая на кнопку «Получить консультацию», вы соглашаетесь
            <div>
              <span> на </span>
              <a href="/">
                <u>
                  <strong>обработку персональных данных</strong>
                </u>
              </a>
            </div>
          </span>
          <button className="sub_appl">Получить консультацию</button>
        </div>
      </div>
    </section>
  )
}
