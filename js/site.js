document.querySelectorAll("[data-nav]").forEach((el) => {
  el.innerHTML = `
    <a class="logo" href="index.html">Destino <span>Yungas</span></a>
    <nav>
      <a href="que-son-las-yungas.html">Qué son</a>
      <a href="mejor-epoca.html">Cuándo ir</a>
      <a href="como-llegar.html">Cómo llegar</a>
      <a href="itinerarios.html">Itinerarios</a>
      <a href="parque-nacional-calilegua.html">Calilegua</a>
      <a href="termas-rio-jordan.html">Termas</a>
      <a href="directorio.html">Directorio</a>
    </nav>`;
});
