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
            rptaCorrecta: 'Es una libreria de javascript',
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
        $('.col-xl-5').click(quiz.siguientePregunta);
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
        $('#imagen').append(`<img src='${quiz.trivial[quiz.preguntaInicio].srcImg}' class='img-fluid'>`);
        $('#progresos').append(`<div class="progress">\
                <div class="progress-bar" role="progressbar" style="width: ${quiz.incrementoPorcentaje}%; height: 7px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>\
            </div>`);
        $('#titulos').append(`<div class="row justify-content-xl-center ">\
                <div class="col-xl-12 col-sm-12"><h2>${quiz.trivial[quiz.preguntaInicio].pregunta}</h2></div>\
            </div>`)
        $('#selecciona').append(
            `<div class="row justify-content-xs-center ">
                <div class="col-xl-5 col-sm-5">${quiz.trivial[quiz.preguntaInicio].opciones[0]}</div>\
                <div class="col-xl-5 col-sm-5">${quiz.trivial[quiz.preguntaInicio].opciones[1]}</div>\
            </div>\
            <div class="row justify-content-xs-center ">
            <div class="col-xl-5 col-sm-5">${quiz.trivial[quiz.preguntaInicio].opciones[2]}</div>\
            <div class="col-xl-5 col-sm-5">${quiz.trivial[quiz.preguntaInicio].opciones[3]}</div>\
            </div>`
        );
        quiz.incrementoPorcentaje += 20;
    },
    limpiarCuestionario: () => {
        $('#progresos').empty();
        $('#titulos').empty();
        $('#selecciona').empty();
        $('#botoncito').empty();
        $('#imagen').empty();
    },
    respuestasHTML: () => {
        console.log(quiz.incrementoPorcentaje)
        $('#imagen').append(`<img src='assets/img/terminaste.gif' class='img-fluid'>`);
        $('#progresos').append(`<div class="progress">\
            <div class="progress-bar" role="progressbar" style="width: ${quiz.incrementoPorcentaje}%; height: 7px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>\
            </div>`);
        $('#titulos').append(`<h2>Tus Respuestas son: </h2>`);
        quiz.preguntaRespuesta();
        $('#botoncito').append(`<div><button id='resolver'>Resolver</button></div>`);
    },
    preguntaRespuesta: () => {
        for (var i = 0; i < sessionStorage.length; i++) {
            let pregunta = sessionStorage.key(i);
            let respuesta = sessionStorage.getItem(pregunta);
            $("#selecciona").append(`<div><p>${i+1}. ${pregunta}:</p><p class='parrafoRespuesta'><strong> ${respuesta}</strong></p></div>`);
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
                $("#selecciona").append(`<div class="alert-correcto" role="alert"><p>${i+1}. ${pregunta}: </p><p class='parrafoRespuesta'> <strong> ${respuesta}</strong></p></div>`);
                quiz.rptasCorrectas += 1;
            } else {
                $("#selecciona").append(`<div class="alert-incorrecto" role="alert"><p>${i+1}. ${pregunta}: </p><p class='parrafoRespuesta'> <strong><del>${respuesta} </del></strong>${quiz.trivial[indice].rptaCorrecta}</p></div>`);

            }
        }
        $('#botoncito').append(`<div><button id='jugar'>Jugar de Nuevo</button></div>`);
        $('#progresos').append(`<div class="progress">\
        <div class="progress-bar" role="progressbar" style="width: ${quiz.incrementoPorcentaje}%; height: 7px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>\
        </div>`);
        $('#titulos').append(`<h2>${quiz.rptasCorrectas} correcta(s) de ${quiz.trivial.length} preguntas</h2>`)
        quiz.incrementoPorcentaje = 0;
        quiz.configuracion();
    },
    respuestasCorrectas: () => {}
}
$(document).ready(quiz.iniciaQuiz)