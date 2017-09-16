'use strict'
const quiz = {
        trivial: [{
                pregunta: "3 * 2",
                opciones: [2, 5, 6, 4],
                rptaCorrecta: 6,
                turespuesta: undefined
            },
            {
                pregunta: "3 * 2",
                opciones: [2, 5, 6, 4],
                rptaCorrecta: 6,
                turespuesta: undefined
            },
            {
                pregunta: "3 * 3",
                opciones: [2, 5, 6, 9],
                rptaCorrecta: 9,
                turespuesta: undefined
            },
            {
                pregunta: "2 * 2",
                opciones: [2, 5, 6, 4],
                rptaCorrecta: 4,
                turespuesta: undefined
            },
            {
                pregunta: "9 * 2",
                opciones: [2, 5, 18, 4],
                rptaCorrecta: 18,
                turespuesta: undefined
            }
        ],
        preguntaInicio: 0,
        iniciaQuiz: () => {
            console.log(quiz.preguntaInicio)
            console.log(quiz.trivial)
            quiz.dibujarHTML();
            quiz.configuracion();
        },
        configuracion: () => {
            $('.col.col-xs-3').on("click", quiz.siguientePregunta);

        },
        siguientePregunta: () => {

            quiz.preguntaInicio++;
            console.log(quiz.preguntaInicio)
            if (quiz.preguntaInicio >= quiz.trivial.length) {
                quiz.preguntaInicio = 0;
                console.log("entro")
            } else {
                quiz.iniciaQuiz();
            }
        },
        dibujarHTML: () => {
            //console.log(quiz.trivial[0].pregunta)
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
        opcionesHTML: () => {

        }
    }
    //console.log(quiz.dibujarHTML());
$(document).ready(quiz.iniciaQuiz)