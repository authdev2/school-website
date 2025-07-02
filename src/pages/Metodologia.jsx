import {
  CalendarDays,
  Users,
  BookOpen,
  GraduationCap,
  Clock,
} from "lucide-react";
import Footer from '../components/footer'

function Metodologia() {
  return (
    <>
      <div className="whithout-af">
        <div className="metodologia-first-container">
          <h1>Metodologia de Ensino</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea dolorum alias<b> Lorem, ipsum Lorem</b>, com
           Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <hr />
          <div className="container-info">
            <div className="container-content">
              <Users color="#036922" size={28} />
              <span>
                <b>Aulas Presenciais</b>
                <br />
                Lorem ipsum dolor sit amet Lorem, ipsum.
              </span>
            </div>
            <div className="container-content">
              <BookOpen color="#036922" size={28} />
              <span>
                <b>Material Didático</b>
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
            <div className="container-content">
              <GraduationCap color="#036922" size={28} />
              <span>
                <b>Tutoria e Apoio</b>
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet.
              </span>
            </div>
          </div>
        </div>

        <div>
          <h1 className="title-calender">Calendario de exames</h1>
          <hr />
<table>
  <thead>
    <tr
      style={{
        background: "linear-gradient(90deg, #0a3d2e 0%, #1e6b4c 100%)",
        color: "#fff",
      }}
    >
      <th>
        <CalendarDays size={20} style={{ verticalAlign: "middle", marginRight: 6 }} />
        Mês
      </th>
      <th>
        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
          Segundas
        </span>
      </th>
      <th>
        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
          Quartas
        </span>
      </th>
      <th>
        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
          Sextas
        </span>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <span>
          <CalendarDays color="#000000" /> Junho
        </span>
      </td>
      <td>
        <span><Clock color="#000000"></Clock>Das 10h - 12h</span>
      </td>
      <td>
        <span><Clock color="#000000"></Clock>Das 14h - 16h</span>
      </td>
      <td>
        <span><Clock color="#000000"></Clock>Das 10h - 12h</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>
          <CalendarDays color="#000000" /> Setembro
        </span>
      </td>
      <td>
        <span><Clock color="#000000"></Clock>Das10h - 12h</span>
      </td>
      <td>
        <span><Clock color="#000000"></Clock>Das14h - 16h</span>
      </td>
      <td>
        <span><Clock color="#000000"></Clock>Das 10h - 12h</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>
          <CalendarDays color="#000000" /> Outubro
        </span>
      </td>
      <td>
        <span><Clock color="#000000"></Clock>Das 10h - 12h</span>
      </td>
      <td>
        <span><Clock color="#000000"></Clock>Das 14h - 16h</span>
      </td>
      <td>
        <span><Clock color="#000000"></Clock>Das 10h - 12h</span>
      </td>
    </tr>
  </tbody>
</table>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Metodologia;
