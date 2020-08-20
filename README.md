# Taller UI & API con WebdriverIO | Axios

## Prerequisitos 

### Deberemos de tener instalado lo siguiente: 

* [Git](http://git-scm.com/)
* [Visual Studio Code](https://code.visualstudio.com/download) 
* [Node.js](http://nodejs.org/)
* [WebdriverIO](https://webdriver.io/) 

### Para dejar en nuestra máquina todo lo necesario para el taller (parte práctica), debemos de seguir los siguientes pasos:

1. Clonar el repositorio. Para esto podemos ir a cualquier terminal y ejecutar ``` git clone https://github.com/matiassallee/taller-api-ui```

2. Una vez clonado el proyecto, deberemos de ir a *Visual Studio Code* y abrir la solución en un nuevo workspace. Una vez abierta la solución, estaremos parados en el root del proyecto, debemos de ejecutar en la terminal del IDE *npm install* par que así se instalen todas las dependencias necesarias (ej: Axios)

## Información de interés 

* Aplicación que estaremos utilizando en el taller: https://vue-vuex-realworld.netlify.app/#/ 
* Documentación front end https://github.com/pjcalvo/node-express-realworld-example-app
* Documentación back end https://github.com/gothinkster/realworld/tree/master/api



## Comandos útiles

+ Para ejecutar toda la suite que este debajo de *specs* en nuestro wdio conf ```npm run test```
+ Para ejecutar un test especifico de UI ```npm run test --spec ./src/ui/specs/sign-in/sign-in.spec.js```
+ Para ejecutar un test especifico de API ````npx mocha ./src/api/specs/test.js --timeout=15000````
