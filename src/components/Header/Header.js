import './Header.css'
import map from './img/MapMarker.png'
import logo from './img/Logo.png'
import photo from './img/Phone.png'

export const Header = () => {
  return (
    <header className="header">
      <img src={map} alt="map" />
      <div className="btn_group">
        <button>Главная</button>
        <button>О компании</button>
        <button>Услуги</button>
      </div>
      <img src={logo} alt="logg" />
      <div className="btn_group">
        <button>Цены</button>
        <button>Портфолио</button>
        <button>Контакты</button>
      </div>
      <img src={photo} alt="ph" />
    </header>
  )
}
