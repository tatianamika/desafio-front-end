<<<<<<< HEAD
var express = require(‘express’);
var app = express();
app.use(express.static(__dirname + ‘/public/app’)); //aqui você define onde está o index.html da sua aplicação.
=======
var express = require(‘express’);
var app = express();
app.use(express.static(__dirname + ‘/public/app’)); //aqui você define onde está o index.html da sua aplicação.
>>>>>>> 8d7ecab5870144d4952ce86a87ccfe0e61eb9dda
app.listen(process.env.PORT || 3000);