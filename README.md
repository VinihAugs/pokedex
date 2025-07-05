# meu-pokedex-ionic
Um projeto de Pokedex desenvolvido com Ionic, como parte dos meus estudos e aprimoramento em desenvolvimento mobile.

1. Instalar o NodeJS (https://nodejs.org/en/download/) 
2. Instalar o CLI do Ionic
npm install -g @ionic/cli


Após clonar o projeto, rode na pasta:
npm install


Para rodar o app no seu navegador:
ionic serve


Rodar no Android:
Baixe o Android Studio e algumas dependências (Tools > SDK Manager);

Saiba mais aqui: https://ionicframework.com/docs/developing/android

Rode os comandos na pasta:
cordova plugin add cordova-plugin-camera-preview

cordova plugin add cordova-plugin-androidx

cordova platform add android@10

cordova platform build android
