import style from "./Topbar.module.scss";
import react_logo from "./../../assets/logos/react-logo.png";
import { ReactComponent as HomeIcon } from "./../../assets/pictogrammes/home.svg";

export default function Topbar() {
  return (
    <section className={style["topbar-main-container"]}>
      <img src={react_logo} alt="Logo de React" height={50} />
      <p className={style["middle-element"]}>Topbar</p>
      <HomeIcon className={style["home-icon"]} />
    </section>
  );
}
