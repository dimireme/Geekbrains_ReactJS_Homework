const Developer = require('./components/class-developer');

const me = new Developer('Alexander', 'Shadrin', 29, 100500, 'служба главного конструктора');

const renderer = require('./components/renderer');

renderer(me.displayInfo());
