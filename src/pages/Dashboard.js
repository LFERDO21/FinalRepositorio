import { Outlet, Link } from "react-router-dom";
const Dashboard = () =>{
    return (
        <div class="container">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" class="card-img-top"
                        alt="Skyscrapers" />
                    <div class="card-body">
                        <h5 class="card-title">MODELO PNL</h5>
                        <p class="card-text">
                        ESTILO DE APRENDIZAJE.
                        </p>
                    </div>
                    <div class="card-footer">
                    <Link class="nav-link" to="/">Entrar encuesta</Link>

                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" class="card-img-top"
                        alt="Los Angeles Skyscrapers" />
                    <div class="card-body">
                        <h5 class="card-title">HONEY-ALONSO</h5>
                        <p class="card-text">ESTILO DE APRENDIZAJE.
                        </p>
                    </div>
                    <div class="card-footer">
                    <Link class="nav-link" to="/">Entrar encuesta</Link>
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" class="card-img-top"
                        alt="Palm Springs Road" />
                    <div class="card-body">
                        <h5 class="card-title">Lynn O’Brien/(1990)</h5>
                        <p class="card-text">
                        ESTILO DE APRENDIZAJE.
                        </p>
                    </div>
                    <div class="card-footer">
                    <Link class="nav-link" to="/lynnEstiloDeAprendizaje">Entrar encuesta</Link>

                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    ); 

}

export default Dashboard;