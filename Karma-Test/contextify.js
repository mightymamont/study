var Contextify = require('contextify');
var sandbox = { console : console, prop1 : 'prop1'};
Contextify(sandbox);
sandbox.run('console.log(prop1);');
sandbox.dispose(); // free the resources allocated for the context.