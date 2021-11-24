const express = require("express");

const app = express();

// express genera un objeto que viene de la peticion,
// y se recibe el primer argumento de la funcion manejadora
// en este caso recibimos los datos via parametros de consulta (query params)
// ejemplo: http://localhost:3000/users?name=juan
app.get("/saludo", (req, res) => {
  res.send(`hola ${req.query.name}`);
});

app.listen(3000);
