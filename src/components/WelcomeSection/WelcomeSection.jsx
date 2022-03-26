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
          <button>
            <div>
              <p className="tooltip">
                С другой стороны реализация намеченных плановых заданий требуют
                от нас анализа.
              </p>
              <p className="btn">Услуги по ремонту</p>
            </div>
          </button>
          <button>
            <div>
              <p className="tooltip">
                С другой стороны реализация намеченных плановых заданий требуют
                от нас анализа.
              </p>
              <p className="btn">Виды работ</p>
            </div>
          </button>
          <button>
            <div>
              <p className="tooltip">
                С другой стороны реализация намеченных плановых заданий требуют
                от нас анализа.
              </p>
              <p className="btn">Дизайн интерьера</p>
            </div>
          </button>
          <button>
            <div>
              <p className="tooltip">
                С другой стороны реализация намеченных плановых заданий требуют
                от нас анализа.
              </p>
              <p className="btn"> Ремонт помещений</p>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
