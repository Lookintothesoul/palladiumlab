import img1 from '../Header/img/Image1.png'
import './WelcomeSection.css'

export const WelcomeSection = () => {
  return (
    <section className="welcome_section">
      <div className="welcome_words">
        <p>
          Ремонт <span>и</span> дизайн
        </p>
        <p>
          <span>в Москве и Московской области</span>
        </p>
      </div>
      <div>
        <button className="sub_appl">Оставить заявку</button>
      </div>

      <div className="navigation">
        <img src={img1} alt="" />
        <div className="nav_btn">
          <button>Услуги по ремонту</button>
          <button>Виды работ</button>
          <button>Дизайн интерьера</button>
          <button>Ремонт помещений</button>
        </div>
      </div>
    </section>
  )
}
