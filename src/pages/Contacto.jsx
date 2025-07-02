import Footer from '../components/footer'

function Contacto() {

    function SendEmail(e){
          e.preventDefault();
        console.log("dad")
    }
    return (
        <>

            <div className="contact-container">
                <div className="main-content">
                    <div className="img-content">
                        <img src="https://i.ibb.co/DgDRcQz9/school-campus-school-supplies-linear-education-computer-test-113537-wh1200-removebg-preview.png" alt="" />
                    </div>
                </div>
                <div className="content-contact">
                <h1>Precisas de ajuda?</h1>
                    <form action="">
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="" id="" />

                        <label htmlFor="text">Nome: </label>
                        <input type="text" name="" id="" />

                        <label htmlFor="text">Sobrenome: </label>
                        <input type="text" name="" id="" />

                        <label htmlFor="number">Telefone: </label>
                        <input type="number" name="" id="" />
                        <label htmlFor="text">Oque precisas de saber?</label>
                        <input type="text" name="" id="" />
                        <button id="submit-form" onClick={SendEmail}>Enviar</button>
                    </form>
                </div>
            </div>
            <div className="location-school">
            <h1>Localização da escola</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.3005392800815!2d-9.186614523551192!3d38.802666452287255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ed2ade945298f%3A0x177ff5dd1280399!2sSchool%20Ramada!5e0!3m2!1sen!2spt!4v1750876108404!5m2!1sen!2spt" width="600" height="450" loading="lazy"></iframe>
            </div>
            <Footer/>
        </>
    )
}

export default Contacto;