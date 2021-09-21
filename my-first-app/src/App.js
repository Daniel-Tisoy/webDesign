import { useState } from "react";
import "./App.css";
import html2canvas from "html2canvas";

function App() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("fire");

  const onChangeLinea1 = function (evento) {
    // devuelve un evento
    setLinea1(evento.target.value);
  };
  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value);
  };
  const onChangeImg = function (evento) {
    setImagen(evento.target.value);
  };
  const onClicExportar = function (evento) {
    alert("exportando");
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      var MIME_TYPE = "image/png";
      var img = canvas.toDataURL(MIME_TYPE);
      document.write('<img src="' + img + '"/>');

      var dlLink = document.createElement("a");
      dlLink.download = "meme";
      dlLink.href = img;
      dlLink.click();
      window.location.reload();
    });
  };
  return (
    <div className="App">
      {/* select picker de memes */}
      <select onChange={onChangeImg}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart guy</option>
      </select>
      <br />
      {/* Input text - Primer línea */}
      <input onChange={onChangeLinea1} type="text" placeholder="Linea 1" />
      <br />
      {/* Input text - segunda línea  */}
      <input onChange={onChangeLinea2} type="text" placeholder="Linea 2" />
      <br />
      {/* Boton exportar*/}
      <button onClick={onClicExportar}>Exportar</button>

      {/* estructura del meme */}
      <div className="meme" id="meme">
        <span>{linea1}</span>

        <span>{linea2}</span>
        <img src={"/img/" + imagen + ".jpg"} alt="" />
      </div>
    </div>
  );
}

export default App;
