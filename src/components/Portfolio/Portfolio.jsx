import './Portfolio.css'
import '../WelcomeSection/WelcomeSection.css'
import img_1 from './PortfolioImage/img_1.png'
import img_2 from './PortfolioImage/img_2.png'
import img_3 from './PortfolioImage/img_3.png'
import img_4 from './PortfolioImage/img_4.png'
import img_5 from './PortfolioImage/img_5.png'
import img_6 from './PortfolioImage/img_6.png'
import img_7 from './PortfolioImage/img_7.png'
import img_8 from './PortfolioImage/img_8.png'

export const Portfolio = () => {
  return (
    <section className="example_container">
      <div className="title">
        <hr />
        <p>
          Примеры <span className="outline">выполненных</span> работ
        </p>
      </div>

      <div className="portfolio">
        <div className="item grid1">
          <p className="label">Новостройка</p>

          <div className="terms">
            <div>
              <p className="caption1">Сроки</p>
              <p className="body1">4 - 5 дней</p>
            </div>
            <div>
              <p className="caption1">Стоимость</p>
              <p className="body1">Нет данных</p>
            </div>
          </div>

          <img src={img_1} alt="" />
        </div>
        <div className="item grid2">
          <p className="label">Новостройка</p>

          <div className="terms">
            <div>
              <p className="caption1">Сроки</p>
              <p className="body1">4 - 5 дней</p>
            </div>
            <div>
              <p className="caption1">Стоимость</p>
              <p className="body1">Нет данных</p>
            </div>
          </div>

          <img src={img_2} alt="" />
        </div>
        <div className="item grid3">
          <p className="label">Вторичка</p>

          <div className="terms">
            <div>
              <p className="caption1">Сроки</p>
              <p className="body1">4 - 5 дней</p>
            </div>
            <div>
              <p className="caption1">Стоимость</p>
              <p className="body1">Нет данных</p>
            </div>
          </div>

          <img src={img_3} alt="" />
        </div>
        <div className="item grid4">
          <p className="label">Вторичка</p>

          <div className="terms">
            <div>
              <p className="caption1">Сроки</p>
              <p className="body1">4 - 5 дней</p>
            </div>
            <div>
              <p className="caption1">Стоимость</p>
              <p className="body1">Нет данных</p>
            </div>
          </div>

          <img src={img_4} alt="" />
        </div>
        <div className="item grid5">
          <p className="label">Новостройка</p>

          <div className="terms">
            <div>
              <p className="caption1">Сроки</p>
              <p className="body1">4 - 5 дней</p>
            </div>
            <div>
              <p className="caption1">Стоимость</p>
              <p className="body1">Нет данных</p>
            </div>
          </div>

          <img src={img_5} alt="" />
        </div>
        <div className="item grid6">
          <p className="label">Вторичка</p>

          <div className="terms">
            <div>
              <p className="caption1">Сроки</p>
              <p className="body1">4 - 5 дней</p>
            </div>
            <div>
              <p className="caption1">Стоимость</p>
              <p className="body1">Нет данных</p>
            </div>
          </div>

          <img src={img_6} alt="" />
        </div>
        <div className="item grid7">
          <p className="label">Вторичка</p>

          <div className="terms">
            <div>
              <p className="caption1">Сроки</p>
              <p className="body1">4 - 5 дней</p>
            </div>
            <div>
              <p className="caption1">Стоимость</p>
              <p className="body1">Нет данных</p>
            </div>
          </div>

          <img src={img_7} alt="" />
        </div>
        <div className="item grid8">
          <p className="label">Новостройка</p>

          <div className="terms">
            <div>
              <p className="caption1">Сроки</p>
              <p className="body1">4 - 5 дней</p>
            </div>
            <div>
              <p className="caption1">Стоимость</p>
              <p className="body1">Нет данных</p>
            </div>
          </div>

          <img src={img_8} alt="" />
        </div>

      </div>
      <div className="all_prj">
        <button className="sub_appl">Все проекты</button>
      </div>
    </section>
  )
}
