const Alexa = require('ask-sdk-core');

const DOCUMENT_ID = "DescripcionCiudad";

const datasource = {
    "videoPlayerTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "",
            "displayFullscreen": false,
            "headerTitle": "",
            "headerSubtitle": "",
            "logoUrl": "",
            "videoControlType": "skip",
            "videoSources": [
                "https://labarbada.store/videos/NewYork.mp4"
            ],
            "sliderType": "determinate"
        }
    }
};

const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
      
        const speakOutput = 'Bienvenido a Curiosidades de New York';
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID, datasource);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const DOCUMENT_ID_Comida = "ComidaTipica";

const datasourceComida = {
    "gridListData": {
        "type": "object",
        "objectId": "gridListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://image.ondacero.es/clipping/cmsimages02/2023/05/19/7F95B5BA-0A2A-4321-8A36-044F2A51845D/imagen-ciudad-nueva-york_98.jpg?crop=5295,2979,x0,y278&width=1900&height=1069&optimize=high&format=webply",
                    "size": "small",
                    "widthPixels": 0,
                    "heightPixels": 0
                },
                {
                    "url": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/gridlist/GridListBackground_Dark.png",
                    "size": "large",
                    "widthPixels": 0,
                    "heightPixels": 0
                }
            ]
        },
        "title": "Comida Típica de New York",
        "listItems": [
            {
                "primaryText": "PIZZA",
                "imageSource": "https://static.anuevayork.com/wp-content/uploads/2020/04/27234039/Pizza-de-Nueva-York-uno-de-los-platos-ti%CC%81picos-de-Nueva-York.jpg"
            },
            {
                "primaryText": "BAGEL CON CREAM CHEESE",
                "imageSource": "https://static.anuevayork.com/wp-content/uploads/2019/07/29223913/Los-mejores-bagels-de-Nueva-York-y-que-tipos-hay-1500.jpg"
            },
            {
                "primaryText": "DÓNUTS",
                "imageSource": "https://static.anuevayork.com/wp-content/uploads/2015/10/25095948/Los-mejores-Donuts-de-Nueva-York-Doughnut-Project-1500.jpg"
            },
            {
                "primaryText": "HUEVOS BENEDICT",
                "imageSource": "https://static.anuevayork.com/wp-content/uploads/2015/08/07210601/Brunch-en-Cafe-Mogador-Williamsburg-East-Village-6.jpg"
            },
            {
                "primaryText": "HAMBURGUESA",
                "imageSource": "https://static.anuevayork.com/wp-content/uploads/2015/02/06193230/Shake-Shack-Nueva-York-hamburguesas.jpg"
            },
            {
                "primaryText": "PANCAKES CON MAPLE SYRUP",
                "imageSource": "https://static.anuevayork.com/wp-content/uploads/2015/07/22030052/Brunch-en-Brooklyn-Five-Leaves-1.jpg"
            }
        ],
        "logoUrl": "https://mbmarcobeteta.com/wp-content/uploads/2021/02/shutterstock_248799484-scaled.jpg"
    }
};

const DOCUMENT_ID_Turistico = "Turist";

const datasourceTuristicos = {
    "gridListData": {
        "type": "object",
        "objectId": "gridListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/gridlist/GridListBackground_Dark.png",
                    "size": "small",
                    "widthPixels": 0,
                    "heightPixels": 0
                },
                {
                    "url": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/gridlist/GridListBackground_Dark.png",
                    "size": "large",
                    "widthPixels": 0,
                    "heightPixels": 0
                }
            ]
        },
        "title": "Plant Stores Near Me",
        "listItems": [
            {
                "primaryText": "Central Park",
                "imageSource": "https://lh6.googleusercontent.com/proxy/5isLoYix52GRtrOGy6vwWi8OpkcpSQmmmc8fSUqj2IYCmkTors6TdQ0YuhnOVrQzsyhBMPHiY2HZr0tThZIJjxo"
            },
            {
                "primaryText": "Puente Brooklyn",
                "imageSource": "https://upload.wikimedia.org/wikipedia/commons/3/31/LOC_Brooklyn_Bridge_and_East_River_7.png"
            },
            {
                "primaryText": "Time Square",
                "imageSource": "https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTgxMzM5MDU0Mzc2MjMyOTA3/the-10-most-interesting-things-to-do-in-times-square-nyc.jpg"
            },
            {
                "primaryText": "Museo de Historia Natural New York",
                "imageSource": "https://www.newyorkando.com/wp-content/uploads/sites/7/2021/01/MUSEO-DE-HISTORIA-NATURAL-Lobby-Unsplash.jpg"
            },
            {
                "primaryText": "Estatua de la Libertad",
                "imageSource": "https://img.static-kl.com/images/media/B44ED170-A51E-4E64-8B35E2F22E58A357?w=960&aspect_ratio=2:1"
            },
            {
                "primaryText": "Hudson Yards",
                "imageSource": "https://www.hudsonyardsnewyork.com/sites/default/files/styles/experience_details/public/2023-12/_DSC2167_20190625100925011_20190625112900%20%281%29.JPG?h=8b1a521b&itok=7vxVEtoI"
            }
        ],
        "logoUrl": "https://mbmarcobeteta.com/wp-content/uploads/2021/02/shutterstock_248799484-scaled.jpg"
    }
};

const DOCUMENT_ID_Traje = "TrajeTipico";

const datasourceTraje = {
    "imageListData": {
        "type": "object",
        "objectId": "imageListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/gridlist/GridListBackground_Dark.png",
                    "size": "large"
                }
            ]
        },
        "title": "Traje Tipico",
        "listItems": [
            {
                "primaryText": "Flapper",
                "imageSource": "https://www.turismonuevayork.com/wp-content/uploads/2016/12/estilo-americano-flapper-1024x716.jpg"
            },
            {
                "primaryText": "Pin-up",
                "imageSource": "https://www.turismonuevayork.com/wp-content/uploads/2016/12/estilo-pin-up-860x1024.jpg"
            },
            {
                "primaryText": "Tocado de plumas o warbonnets",
                "imageSource": "https://www.turismonuevayork.com/wp-content/uploads/2016/12/tocado-de-plumas.jpg"
            },
            {
                "primaryText": "Vaqueros azules",
                "imageSource": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxcb5GetpwTuj-Aw9Fh6MlqY946Zudcrq4GQ&s"
            }
        ],
        "logoUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFYXtxyFA5KF_-jdesMxON0ywfb3q744Nllg&s",
        "hintText": "New York"
    }
};

const DOCUMENT_ID_Personaje = "PersonajeSobresaliente";

const datasourcePersonaje = {
    "simpleTextTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "data:image/jpeg;base64,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",
            "foregroundImageLocation": "left",
            "foregroundImageSource": "https://9524ead284.cbaul-cdnwnd.com/0e6be4222399c04a369c20bd2c4a21ca/200000004-55c8a56c37/images.jpg",
            "headerTitle": "Alexander Hamilton",
            "headerSubtitle": "",
            "hintText": "Try, \"Alexa, next question\"",
            "headerAttributionImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/logo-world-of-plants-2.png",
            "primaryText": "Hamilton (1755-1804) fue un héroe de la independencia y primer secretario del Tesoro. Sus medidas económicas propiciaron que Nueva York se convirtiera en la capital fi­nanciera de EE UU. Murió a conse­cuencia de un duelo con su opo­nente político Aaron Burr y está enterrado en Trinity Church.",
            "textAlignment": "start",
            "titleText": ""
        }
    }
};

const DOCUMENT_ID_Musica = "Audio";

const datasourceMusica = {
    "audioPlayerTemplateData": {
        "type": "object",
        "properties": {
            "audioControlType": "jump30",
            "audioSources": [
                "https://agussbucket.s3.us-east-2.amazonaws.com/Musica_tipica.mp3",
                "https://agussbucket.s3.us-east-2.amazonaws.com/Musica_tipica.mp3"
            ],
            "backgroundImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpPGvg8BiH8g0kDz60583U8pPAjwTh9EUYGQ&s",
            "coverImageSource": "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/peliculas/cancion-de-nueva-york/134290390-5-esl-ES/Cancion-de-Nueva-York.jpg",
            "headerTitle": "Musi New York",
            "logoUrl": "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/peliculas/cancion-de-nueva-york/134290390-5-esl-ES/Cancion-de-Nueva-York.jpg",
            "primaryText": "New York",
            "secondaryText": "",
            "sliderType": "determinate"
        }
    }
};

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Hello World!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const ComidaHandle = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ComidaIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Comida Tipica de New York';  
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_Comida, datasourceComida);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const LugaresHandle = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'LugaresIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Lugares Turisticos de New York';  
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_Turistico, datasourceTuristicos);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const TrajeHandle = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'trajeintent';
    },
    handle(handlerInput) {
        const speakOutput = 'Traje tipico de New York';  
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_Traje, datasourceTraje);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const PersonajeHandle = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'personajeintent';
    },
    handle(handlerInput) {
        const speakOutput = 'Alexander Hamilton';  
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_Personaje, datasourcePersonaje);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const MesicHandle = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'musicaintent';
    },
    handle(handlerInput) {
        const speakOutput = 'Cancion de Nwe York';  
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_Musica, datasourceMusica);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};


/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        ComidaHandle,
        LugaresHandle,
        TrajeHandle,
        PersonajeHandle,
        MesicHandle,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();