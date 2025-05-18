import logo from "#/logo.svg";
import './footer.css'


export default function Footer() {
  return (
    <div className="Overlay">
      <nav>
        <img src={logo} alt="" />
        <ul>
          <li>Кто мы?</li>
          <li>Услуги</li>
          <li>Акселератор</li>
          <li>Новости</li>
        </ul>
        <div className="signal">
          <p>Dubai, Single Business Tower 1503, Business Bay</p>
          <p>Sales@innoma.vc</p>
        </div>
      </nav>
    </div>
  );
}
