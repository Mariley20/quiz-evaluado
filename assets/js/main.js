'use strict'
const quiz = {
    trivial: [{
            pregunta: "¿Cual fue el primer lenguaje de Programación?",
            opciones: ['tarjetas Perforadas / ADA', 'dev c++', 'FORTRAN ', 'Cobol'],
            srcImg: 'assets/img/lenguajeProgramacion.jpg',
            rptaCorrecta: 'tarjetas Perforadas / ADA',
            turespuesta: undefined
        },
        {
            pregunta: "JQuery es: ",
            opciones: [
                'Es un framework de javaScript',
                'Es un IDE',
                'Es una libreria de javascript',
                'Es una API'
            ],
            srcImg: 'assets/img/jquery.gif',
            rptaCorrecta: 6,
            turespuesta: undefined
        },
        {
            pregunta: "¿Quienes son Larry Page y Sergey Brin?",
            opciones: [
                'Los creadores del motor de Google',
                'Ganadores del premio novel de la paz',
                'Compañeros Mark Zuckerberg',
                'Fundadores de Amazon'
            ],
            srcImg: 'assets/img/fundadoresGoogle.jpg',
            rptaCorrecta: 'Los creadores del motor de Google',
            turespuesta: undefined
        },
        {
            pregunta: "¿Qué año se creo facebook?",
            opciones: [
                'En febrero de 2004',
                'entre 2008 - 2010',
                '10 marzo 2001',
                '2005'
            ],
            srcImg: 'assets/img/facebook.png',
            rptaCorrecta: 'En febrero de 2004',
            turespuesta: undefined
        },
        {
            pregunta: "Quien es Marissa Meyers",
            opciones: [
                'CEO de Yahoo!, y quien logro triplicar su valor.',
                'No fue la primera ingeniera mujer del equipo de GOOGLE',
                'Es una atleta reconocida mundialmente',
                'Es una modelo de la revista'
            ],
            srcImg: 'assets/img/marissa.jpg',
            rptaCorrecta: 'CEO de Yahoo!, y quien logro triplicar su valor.',
            turespuesta: undefined
        }
    ],
    incrementoPorcentaje: 0,
    preguntaInicio: 0,
    iniciaQuiz: () => {
        quiz.dibujarHTML();
        quiz.configuracion();
    },
    configuracion: () => {
        $('.col-xl-6').on("click", quiz.siguientePregunta);
    },
    siguientePregunta: (event) => {
        let respuesta = event.target.textContent;
        quiz.guardarDatos(respuesta)
        quiz.preguntaInicio++;
        if (quiz.preguntaInicio >= quiz.trivial.length) {
            quiz.preguntaInicio = 0;
            quiz.incrementoPorcentaje = 0;
        } else {
            quiz.limpiarCuestionario();
            quiz.iniciaQuiz();
        }
    },
    guardarDatos: (respuesta) =>{
        localStorage.setItem(quiz.trivial[quiz.preguntaInicio].pregunta, respuesta);
    },
    dibujarHTML: () => {
        $('#imagen').append(`<img src='${quiz.trivial[quiz.preguntaInicio].srcImg}' class='img-fluid' id="imagen">`)
        $('#cuestionario').append(
            `<div class="progress">\
                  <div class="progress-bar bg-success" role="progressbar" style="width: ${quiz.incrementoPorcentaje}%; height: 10px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>\
            </div>\
            <div class="row justify-content-xs-center ">\
                <div class="col-xl-8">${quiz.trivial[quiz.preguntaInicio].pregunta}</div>\
            </div>\
            <div class="row justify-content-xs-center ">
                <div class="col-xl-6">${quiz.trivial[quiz.preguntaInicio].opciones[0]}</div>\
                <div class="col-xl-6">${quiz.trivial[quiz.preguntaInicio].opciones[1]}</div>\
            </div>\
            <div class="row justify-content-xs-center ">
            <div class="col-xl-6">${quiz.trivial[quiz.preguntaInicio].opciones[2]}</div>\
            <div class="col-xl-6">${quiz.trivial[quiz.preguntaInicio].opciones[3]}</div>\
            </div>`
        );
        quiz.incrementoPorcentaje += 20;
    },
    limpiarCuestionario: () => {
        $('#cuestionario').empty();
        $('#imagen').empty();
    },
    htmlFinal : () =>{
        $('#cuestionario').append(``)
    }
}
$(document).ready(quiz.iniciaQuiz)