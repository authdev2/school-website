import { Instagram, Linkedin, ArrowRightFromLine } from 'lucide-react';
import { Link } from "react-router-dom";
function Footer(){
    return (
        <>
            <footer>
                <div className="container-footer">

                    <div className="social-links">
                        <a href="https://instagram.com" target="_blank"><Instagram/></a>
                        <a href="https://linkedin.com" target="_blank"><Linkedin/></a>
                    </div>
                    
                    <span className='copiright-text'>© {new Date().getFullYear()} Projeto Tokio. Todos os direitos reservados.</span>

                    <div className="privacy-links">

                        <Link to={"/Privacidade"}>
                        <a href=""><ArrowRightFromLine/> Política de Privacidade</a>
                        </Link>

                        <Link to={"/Cookies"}>
                        <a href=""><ArrowRightFromLine/> Política de Cookies</a>
                        </Link>

                        <Link to={"/Legal"}>
                        <a href=""><ArrowRightFromLine/> Aviso Legal</a>
                        </Link>

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer