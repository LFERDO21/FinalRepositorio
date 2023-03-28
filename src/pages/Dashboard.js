import { Outlet, Link } from "react-router-dom";
const Dashboard = () =>{
    return (

        <div class="container">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                    <img src="https://i.ibb.co/q1Kjw93/Copia-de-Copia-de-PSICOVAK-1.png" alt="PSICOVAK-1" class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">MODELO PNL</h5>
                        <p class="card-text">
                        ESTILO DE APRENDIZAJE.
                        </p>
                    </div>
                    <div class="card-footer">
                    <p>
                        <a class="text-muted" href="https://psicoschool.onrender.com/test1/quiz.html">Entrar encuesta</a>
                    </p>
                        <small class="text-muted">Prof. Utonio</small>
                    </div>
                    </div>
                </div>


                <div class="col">
                    <div class="card h-100">
                    <img src="https://i.ibb.co/RbY9rVb/Copia-de-Copia-de-PSICOVAK.png" alt="Copia-de-Copia-de-PSICOVAK" class="card-img-top"/>
                    <div class="card-body">
                        <h5 class="card-title">HONEY-ALONSO</h5>
                        <p class="card-text">ESTILO DE APRENDIZAJE.
                        </p>
                    </div>
                    <div class="card-footer">
                    <p>
                        <a class="text-muted" href="https://psicoschool.onrender.com/test2/quiz2.html">Entrar encuesta</a>
                    </p>
                        <small class="text-muted">Dr. Rick Sánchez</small>
                    </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                    <img src="https://i.ibb.co/HhkcbSx/Copia-de-Copia-de-PSICOVAK-2.png" alt="PSICOVAK-2"  class="card-img-top"/>
                    <div class="card-body">
                        <h5 class="card-title">Lynn O’Brien/(1990)</h5>
                        <p class="card-text">
                        ESTILO DE APRENDIZAJE.
                        </p>
                    </div>
                    <div class="card-footer">
                    <p>
                        <a class="text-muted" href="https://psicoschool.onrender.com/test3/quiz3.html">Entrar encuesta</a>
                    </p>
                        <small class="text-muted">Dr. Emmett Brown</small>
                    </div>
                    </div>
                </div>
            </div>
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

export default Dashboard;