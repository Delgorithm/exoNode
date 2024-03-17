// On importe le module présent dans 'information.js'
const myInformation = require('./information');
// On importe le module 'cowsay' comme demandé
const cowsay = require('cowsay');

// On extrait les propriétés de l'objet 'meMyself' qui provient de 'information.js'
const { name, campus } = myInformation.meMyself;
// On créer une constante message avec les valeurs extraites de l'objet
const message = `My name is ${name}. I study at ${campus}`;
// On utilise le module cowsay + sa notation qui provient de la doc
console.log(cowsay.say({ text: message }));