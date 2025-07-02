import { Link } from "react-router-dom";
import Footer from '../components/footer'

function Exames() {
  const exames = [
    {
      nome: "GNR",
      Requisitos: "Lorem Lorem Lorem Lorem Lorem",
      Fases: "Lorem Lorem Lorem Lorem Lorem",
      Programa: "Lorem Lorem Lorem Lorem Lorem",
    },
    {
      nome: "Polícia Nacional",
      Requisitos: "Lorem Lorem Lorem Lorem Lorem",
      Fases: "Lorem Lorem Lorem Lorem Lorem",
      Programa: "Lorem Lorem Lorem Lorem Lorem",
    },
    {
      nome: "Tropa",
      Requisitos: "Lorem Lorem Lorem Lorem Lorem",
      Fases: "Lorem Lorem Lorem Lorem Lorem",
      Programa: "Lorem Lorem Lorem Lorem Lorem",
    },
    {
      nome: "Fuzileiros",
      Requisitos: "Lorem Lorem Lorem Lorem Lorem",
      Fases: "Lorem Lorem Lorem Lorem Lorem",
      Programa: "Lorem Lorem Lorem Lorem Lorem",
    },
  ];
  return (
    <>
    <h1 className="title-exames">Sobre os exames</h1>
      <div className="container-exames">
        {exames.map((ex, index) => {
          return (
            <div key={index} className="exame-card">
              <h2>{ex.nome}</h2>
              <p>
                <strong>Requisitos:</strong> {ex.Requisitos}
              </p>
              <p>
                <strong>Fases:</strong> {ex.Fases}
              </p>
              <p>
                <strong>Programa:</strong> {ex.Programa}
              </p>
              <Link to={"/contacto"}> Entrar em Contacto</Link>
            </div>
          );
        })}
      </div>
      <Footer/>
    </>
  );
}

export default Exames;
