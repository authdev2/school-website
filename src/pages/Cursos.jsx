import { Star, Users, Clock, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from '../components/footer'


const cursos = [
  {
    nome: "GNR",
    descricao:
      "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem",
    imagem: "https://i.ibb.co/zTnjfn8G/mostrar-Imagem.png",
    estrelas: 4,
    duracao: "6 meses",
    alunos: "150+",
    preco: "+500€",
    badge: "Mais Popular",
    classificacoes: "540 classificações",
  },
  {
    nome: "Polícia Nacional",
    descricao:
      "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem",
    imagem: "https://i.ibb.co/SpXVNyw/PVAL8438-1024x683.jpg",
    estrelas: 5,
    duracao: "8 meses",
    alunos: "200+",
    preco: "+700€",
    badge: "Mais Popular",
    classificacoes: "540 classificações",
  },
  {
    nome: "Tropas",
    descricao:
      "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem",
    imagem: "https://i.ibb.co/84Nvp94R/istockphoto-1394396934-612x612.jpg",
    estrelas: 4,
    duracao: "4 meses",
    alunos: "120+",
    preco: "+300€",
    classificacoes: "540 classificações",
  },
  {
    nome: "Fuzileiros",
    descricao:
      "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem",
    imagem:
      "https://i.ibb.co/60wFsBrd/Fuzileiros-Navais-de-Portugal-3-scaled.jpg",
    estrelas: 3,
    duracao: "5 meses",
    alunos: "80+",
    preco: "+200€",
    classificacoes: "540 classificações",
  },
];

function Cursos() {
  return (
    <>
    <div className="container-cursos">
      <div className="cursos-header">
        <h1 className="cursos-title">Nossos Cursos</h1>
      </div>

      <div className="box-cursos">
        {cursos.map((curso, idx) => (
          <div className="box-info" key={idx}>
            {curso.badge ? <div className="curso-badge">{curso.badge}</div> : console.log("n existe badge")}

            <div className="img-course">
              <img src={curso.imagem} alt={curso.nome} />
            </div>

            <div className="info-course">
              <h2>{curso.nome}</h2>
              <p>{curso.descricao}</p>
            </div>

            <div className="curso-stats">
              <div className="stat-item">
                <Clock size={16} />
                <span>{curso.duracao}</span>
              </div>
              <div className="stat-item">
                <Users size={16} />
                <span>{curso.alunos} alunos</span>
              </div>
            </div>

            <div className="stars-course">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  size={18}
                  color={idx < curso.estrelas ? "#FFD700" : "#E5E7EB"}
                  fill={idx < curso.estrelas ? "#FFD700" : "none"}
                />
              ))}
              <span className="rating-text">({curso.estrelas}/5)</span>
              <span className="classificacoes-curso">
                {curso.classificacoes}
              </span>
            </div>

            <Link className="btn-curso" to={"/contacto"}>
              <span>Saber mais</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
      </>
  );
}

export default Cursos;
