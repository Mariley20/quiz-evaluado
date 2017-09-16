'use strict'
const quiz = {
    trivial: [{
            pregunta: "¿Cual fue el primer lenguaje de Programación?",
            opciones: ['tarjetas Perforadas', 'dev c++', 'FORTRAN ', 'Cobol'],
            srcImg: '',
            rptaCorrecta: 6,
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
            srcImg: '',
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
            srcImg: '',
            rptaCorrecta: 9,
            turespuesta: undefined
        },
        {
            pregunta: "¿¿Qué año se creo facebook?",
            opciones: [
                'En febrero de 2004',
                'entre 2008 - 2010',
                '10 marzo 2001',
                '2005'
            ],
            srcImg: '',
            rptaCorrecta: 4,
            turespuesta: undefined
        },
        {
            pregunta: "Quien es Maritza Meyers",
            opciones: [
                'CEO de Yahoo!',
                'No fue la primera ingeniera mujer del equipo de GOOGLE',
                'Es una atleta reconocida mundialmente',
                'Es una modelo de la revista'
            ],
            srcImg: '',
            rptaCorrecta: 18,
            turespuesta: undefined
        }
    ],
    preguntaInicio: 0,
    iniciaQuiz: () => {
        quiz.dibujarHTML();
        quiz.configuracion();
    },
    configuracion: () => {
        $('.col.col-xs-3').on("click", quiz.siguientePregunta);
    },
    siguientePregunta: () => {
        quiz.preguntaInicio++;
        if (quiz.preguntaInicio >= quiz.trivial.length) {
            quiz.preguntaInicio = 0;
        } else {
            quiz.limpiarCuestionario();
            quiz.iniciaQuiz();
        }
    },
    dibujarHTML: () => {
        $('#cuestionario').append(
            `<div class="row justify-content-xs-center ">\
                <div class="col col-xs-8">${quiz.trivial[quiz.preguntaInicio].pregunta}</div>\
            </div>\
            <div class="row justify-content-xs-center ">
                <div class="col col-xs-3">${quiz.trivial[quiz.preguntaInicio].opciones[0]}</div>\
                <div class="col col-xs-3">${quiz.trivial[quiz.preguntaInicio].opciones[1]}</div>\
            </div>\
            <div class="row justify-content-xs-center ">
            <div class="col col-xs-3">${quiz.trivial[quiz.preguntaInicio].opciones[2]}</div>\
            <div class="col col-xs-3">${quiz.trivial[quiz.preguntaInicio].opciones[3]}</div>\
            </div>`
        );
    },
    limpiarCuestionario: () => {
        $('#cuestionario').empty();
    }
}
$(document).ready(quiz.iniciaQuiz)