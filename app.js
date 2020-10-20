const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/HackatonBBVA", {
  useNewUrlParser: true,useUnifiedTopology: true
});

const ClienteSchema = {
  
  idCliente: String,
  nombre: String,
  apellidoPaterno: String,
  apellidoMaterno: String,
  fechaNacimiento: Date,
  sexo: String,
  segmento: String,
  nacionalidad:String,
  rfc:String,
  tipoID: String,
  numeroID: String,
  cuenta: String,
  email: String
};

const Cliente = mongoose.model("Cliente", ClienteSchema);




app.route("/clientes/:id")

.get(function(req, res){
  
  const clienteID = req.params.id;
  Cliente.findOne({idCliente: clienteID}, function(err, cliente){
    if (cliente){
      const jsonCliente = JSON.stringify(cliente);
      res.send(jsonCliente);
    } else {
      res.send("No se encuentra el dato");
    }
  });
})
