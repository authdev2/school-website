import './Style.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'  
import MainPage from './pages/mainPage'
import Metodologia from './pages/Metodologia'
import Exames from './pages/Exames'
import Cursos from './pages/Cursos'
import Contacto from './pages/Contacto'  
import Privacidade from './pages/privacidade'
import Cookies from './pages/Cookies'
import Legal from './pages/Legal'


function InitialPage() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/metadologia" element={<Metodologia />} />
        <Route path="/exames" element={<Exames />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path='/Privacidade' element={<Privacidade/>}/>
        <Route path='/Cookies' element={<Cookies/>}/>
        <Route path='/Legal' element={<Legal/>}/>



      </Routes>
    </>
  )
}

export default InitialPage
