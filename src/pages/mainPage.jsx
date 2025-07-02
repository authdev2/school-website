import {
  MessageCircle,
  ArrowRight,
  Users,
  Star,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

function MainPage() {

  function Whatsapp(){
    const number = "351911453335" 
    window.open(`https://api.whatsapp.com/send/?phone=${number}&text&type=phone_number&app_absent=0`);
  }
  return (
    <>
      <div className="main-page">
        <div className="main-content">
          <div className="paragraph-secondary">
            <h4>Estás preparado para uma nova fase da tua vida?</h4>
          </div>

          <div className="main-title">
            <h1>Estás no sitio certo para aprender com os melhores!</h1>
          </div>

          <hr />

          <div className="main-paragraph">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus molestias ipsa ipsum vitae cumque perferendis et, beatae consectetur consequatur omnis tempore numquam accusamus! Repellat maiores et hic quisquam neque mollitia!
              <span> Lorem ipsum dolor sit amet consectetur</span>,
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A magni sapiente sequi perspiciatis, veniam illo at assumenda delectus quod nisi quia hic, temporibus ut minima tempore ab repellendus quo iste.
            </p>
          </div>

          <div className="trust-badges">
            <div className="trust-badge">
              <Users size={24} color="#0a3d2e" />
              <span className="number">100+</span>
              <span className="label">Alunos</span>
            </div>
            <div className="trust-badge">
              <CheckCircle size={24} color="#0a3d2e" />
              <span className="number">+95%</span>
              <span className="label">Alunos felizes</span>
            </div>
            <div className="trust-badge">
              <Star size={24} color="#0a3d2e" />
              <span className="number">4.9</span>
              <span className="label">Avaliação Média</span>
            </div>
          </div>

          <div className="date-btn">
            <Link to="/Cursos" className="btn-link">
              Vamos crescer juntos?
              <ArrowRight size={20} />
            </Link>
          </div>
          <div className="nearest-date">
            <h5>Proxima data de exames: <span> 8/09/2025</span></h5>
          </div>
        </div>

        <div className="main-image">
          <img
            src="https://i.ibb.co/fhmBZfN/Site-Educacao-Empreendedora-Prancheta-1.png"
            alt="Educação Empreendedora"
          />
        </div>

        <div className="whatsapp-btn">
          <button onClick={Whatsapp}>
            <MessageCircle size={24} />
          </button>
        </div>
      </div>
    </>
  );
}

export default MainPage;
