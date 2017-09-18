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
    rptasCorrectas: 0,
    iniciaQuiz: () => {
        quiz.limpiarCuestionario();
        quiz.preguntasHTML();
        quiz.configuracion();
    },
    configuracion: () => {
        $('.col-xl-6').on("click", quiz.siguientePregunta);
        $('#resolver').click(quiz.comprobarRespuestas);
        $('#jugar').click(quiz.iniciaQuiz);
    },
    siguientePregunta: (event) => {
        let respuesta = event.target.textContent;
        quiz.guardarDatos(respuesta)
        quiz.preguntaInicio++;
        quiz.limpiarCuestionario();
        if (quiz.preguntaInicio >= quiz.trivial.length) {
            quiz.preguntaInicio = 0;
            quiz.respuestasHTML();
            quiz.configuracion();
        } else {
            quiz.iniciaQuiz();
            
        }
    },
    guardarDatos: (respuesta) => {
        sessionStorage.setItem(quiz.trivial[quiz.preguntaInicio].pregunta, respuesta);
    },
    preguntasHTML: () => {
        $('#imagen').append(`<img src='${quiz.trivial[quiz.preguntaInicio].srcImg}' class='img-fluid'>`)
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
    respuestasHTML: () => {
        console.log(quiz.incrementoPorcentaje)
        $('#imagen').append(`<img src='assets/img/terminaste.gif' class='img-fluid'>`);
        $('#cuestionario').append(`<div class="progress">\
            <div class="progress-bar bg-success" role="progressbar" style="width: ${quiz.incrementoPorcentaje}%; height: 10px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>\
            </div>\
            <h2>Tus Respuestas son: </h2>`);
        quiz.preguntaRespuesta();
        $('#cuestionario').append(`<div><button id='resolver'>Resolver</button></div>`);
    },
    preguntaRespuesta: () => {
        for (var i = 0; i < sessionStorage.length; i++) {
            let pregunta = sessionStorage.key(i);
            let respuesta = sessionStorage.getItem(pregunta);
            $("#cuestionario").append(`<div><p>${pregunta}:<strong> ${respuesta}</strong></p></div>`);
        }
    },
    comprobarRespuestas: () => {
        quiz.limpiarCuestionario();
        $('#imagen').append(`<img src='assets/img/terminaste.gif' class='img-fluid'>`);
        for (var i = 0; i < sessionStorage.length; i++) {
            let pregunta = sessionStorage.key(i);
            let respuesta = sessionStorage.getItem(pregunta);
            let indice;
            quiz.trivial.filter((index, s) => {
                if (pregunta == index.pregunta) {
                    return indice = s;
                }
            });
            if (respuesta == quiz.trivial[indice].rptaCorrecta) {
                $("#cuestionario").append(`<div class="alert alert-success" role="alert"><p>${pregunta}:<strong> ${respuesta}</strong></p></div>`);
                quiz.rptasCorrectas += 1;
            } else {
                $("#cuestionario").append(`<div class="alert alert-danger" role="alert"><p>${pregunta}: <strong><del>${respuesta}</del></strong>${quiz.trivial[indice].rptaCorrecta}</p></div>`);
                
            }
        }
        $('#cuestionario').append(`<div><button id='jugar'>Jugar de Nuevo</button></div>`);
        $('#cuestionario').prepend(`<div class="progress">\
        <div class="progress-bar bg-success" role="progressbar" style="width: ${quiz.incrementoPorcentaje}%; height: 10px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>\
        </div>\
        <h2>${quiz.rptasCorrectas} correcta(s) de ${quiz.trivial.length} preguntas</h2>`);
        quiz.incrementoPorcentaje = 0;        
        quiz.configuracion();
    },
    respuestasCorrectas: () => {}
}
$(document).ready(quiz.iniciaQuiz)