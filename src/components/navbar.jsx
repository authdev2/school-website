import {
  House,
  BadgePercent,
  BookCheck,
  TextSelect,
  Mail,
  Phone,
  AlignJustify,
  Minimize,
} from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  function ShowMenuPhone() {
    document.querySelector(".nav-phone-content").classList.toggle("show-menu");
  }

  return (
    <>
      <nav>
        <div className="navbar-content">
          <div className="main-logo">
            <Link to="/">
              <img src="https://i.ibb.co/m5M91Z5d/logo1.png" alt="" />
            </Link>
          </div>

          <div className="main-links">
            <Link to="/">
              <House></House>
              Home
            </Link>
            <Link to="/metadologia">
              <BadgePercent></BadgePercent>
              Metodologia
            </Link>
            <Link to="/exames">
              <BookCheck></BookCheck>
              Exames
            </Link>
            <Link to="/cursos">
              <TextSelect></TextSelect>
              Cursos
            </Link>
            <Link to="/contacto">
              <Mail></Mail>
              Contacto
            </Link>
          </div>

          <div className="main-btn">
            <a href="tel:911846636">
              <button>
                <Phone></Phone>
                Telefonar
              </button>
            </a>
          </div>

          <div class="container-nav-phone">
            <button onClick={ShowMenuPhone} className="nav-phone">
              <AlignJustify></AlignJustify>
            </button>

            <div className="nav-phone-content">
              <Link to="/">
                <div className="to-format">
                  <House></House>
                  Home
                </div>
              </Link>
              <Link to="/metadologia">
                <div className="to-format">
                  <BadgePercent></BadgePercent>
                  Metodologia
                </div>
              </Link>
              <Link to="/exames">
                <div className="to-format">
                  <BookCheck></BookCheck>
                  Exames
                </div>
              </Link>
              <Link to="/cursos">
                <div className="to-format">
                  <TextSelect></TextSelect>
                  Cursos
                </div>
              </Link>
              <Link to="/contacto">
                <div className="to-format">
                  <Mail></Mail>
                  Contacto
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
