
const LynnEstiloDeAprendizaje = () =>{

    return (
        <div>
            <div class="circulos">
                <div class="circle1"></div>
                <div class="circle2"></div>
                <div class="circle3"></div>
                <div class="circle4"></div>
                <div class="circle5"></div>
                <div class="circle6"></div>
            </div>
                <div class="containers">
                <center>    
                </center>

                <div id="quiz-container">

                    <div class="questions">
                        <h2 id="question"></h2>
                        <ol type="A">
                            <li class="option"><span id="option0" onclick="calcScore(this)"></span></li>
                            <li class="option"><span id="option1" onclick="calcScore(this)"></span></li>
                            <li class="option"><span id="option2" onclick="calcScore(this)"></span></li>
                        </ol>
                        <h4 id="stat"></h4>
                    </div>

                    <div class="buttons">
                        <button type="button" class="next">Siguiente</button>
                    </div>
                </div>
                <div id="scoreboard">
                    <h2 id="score-title">Puntuación</h2>
                    <h2 id="score"></h2>
                    <button type="button" id="score-btn" onclick="backToQuiz()">Volver a Test</button>
                    <button type="button" id="check-answer" onclick="checkAnswer()">Comprobar respuestas</button>
                </div>

                <div id="answerBank">
                    <h2>Respuestas:</h2>
                    <ol type="1" id="answers">

                    </ol>
                    <button type="button" id="score-btn" onclick="backToQuiz()">Volver a Test</button>
                </div>
            </div>


        </div>
        
    );
}

export default LynnEstiloDeAprendizaje;
