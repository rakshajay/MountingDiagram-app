import "./header.scss";
import { Link } from "react-router-dom";
import logoImg from "/src/assets/Logo/InSt-Logo_1x.png";


function Header() {

  return (
    <header className="header">
      <div className="header__container"> 
        <div className="header__wrapper-logo">
          <Link to="/">
          <img src={logoImg} alt="Inst Logo" />
          </Link>
      </div>
        <div className="header__wrapper-buttons">
            <button>
              Details
            </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
