import "./header.css";
import logo from "#/logo.svg";
import Login from "../button/button";
import { Menu } from "@mui/material";

export default function Header() {
  return (
    <nav>
      <img src={logo} alt="" />
      <ul>
        <li>Кто мы?</li>
        <li>Услуги</li>
        <li>Акселератор</li>
        <li>Новости</li>
      </ul>
      <div className="btn">
        <Login> Войти </Login>
        <Menu className="menu" />
      </div>
    </nav>
  );
}
