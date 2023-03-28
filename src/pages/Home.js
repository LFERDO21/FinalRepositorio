import { Link } from "react-router-dom";

const Home = () =>{
    return (
    <div>
        <article class="pb-5">
            <section class="containers">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h1>Pagina de Encuestas Psicologicas</h1>
                        <p>Bienvenido/a a nuestra página de respuestas de test psicológicas. Aquí podrás encontrar una variedad de pruebas diseñadas para ayudarte a explorar tu personalidad, habilidades y preferencias. Nuestros test han sido desarrollados por profesionales en el campo de la psicología y han sido validados empíricamente para asegurar su precisión.</p>
                        </div>
                        <div class="col-lg-6 order-1 order-lg-2 hero-img">
                            <img src="https://i.ibb.co/6H4tWLv/logo-PSICO-2.png" class="img-fluid animated" alt="logo-PSICO-2" border="0"/>

                        </div>
                    </div>
                </div>
            </section>
            <section class="containers">
                <div class="container">
                    <div class="row">
                    <div class="col-lg-6 pt-5 pt-lg-0 order-1 order-lg-2 d-flex flex-column justify-content-center">
                        <h1>Seguridad en sus datos</h1>
                        <p>En nuestra página web, nos tomamos muy en serio la seguridad de los datos de nuestros usuarios. Para ello, utilizamos la plataforma de nube Firebase, que nos ofrece una seguridad de primer nivel para garantizar que toda la información que se maneje en nuestra página esté protegida y resguardada adecuadamente.</p>
                        <p>Firebase nos proporciona una serie de herramientas de seguridad, como la autenticación de usuarios, el cifrado de datos y el control de acceso, para asegurarnos de que solamente las personas autorizadas puedan acceder a la información. Además, Firebase cuenta con un equipo de expertos en seguridad que trabajan constantemente para mejorar la protección de los datos y prevenir cualquier tipo de amenaza o ataque.</p>
                        <Link class="btn btn-outline-primary" to="/Politicadeprivacidad">Conoce mas</Link>
                    </div>
                    <div class="col-lg-6 order-2 order-lg-1 hero-img">
                        <img src="https://i.ibb.co/X2fJr2f/logo-PSICO-3.png" class="img-fluid animated" alt="logo-PSICO-3" border="0"/>
                    </div>
                    </div>
                </div>
            </section>
            <section class="containers pb-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h1>Blogs de nuestros Psicologos, Aprende mas con nosotros</h1>
                        <p>Bienvenido/a a nuestra página de respuestas de test psicológicas. Aquí podrás encontrar una variedad de pruebas diseñadas para ayudarte a explorar tu personalidad, habilidades y preferencias. Nuestros test han sido desarrollados por profesionales en el campo de la psicología y han sido validados empíricamente para asegurar su precisión.</p>
                        <a href="https://practicavueblog-js.onrender.com/" class="btn btn-outline-primary">Blogs </a>
                        </div>
                        <div class="col-lg-6 order-1 order-lg-2 hero-img ">
                            <img src="https://i.ibb.co/KjfdXYj/logo-PSICO-4.png" class="img-fluid animated" alt="logo-PSICO-2" border="0"/>

                        </div>
                    </div>
                </div>
            </section>
        </article>
    <div class="circulos">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
        <div class="circle4"></div>
        <div class="circle5"></div>
        <div class="circle6"></div>
     </div>            
  </div>            
);
}

export default Home;