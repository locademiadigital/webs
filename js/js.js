function validar() {
    var nom = document.getElementById('nombre');
    var tit = document.getElementById('titulo');
    var url1 = document.getElementById('url');
    var sect = document.getElementById('section');
    var conta = document.getElementById('contador');
    var v = document.getElementById("post");
      
    // control de nombre
    if (nom.value.length <= 0) { 
      nom.classList.add("invalid") 
      } else { nom.classList.remove("invalid") }

    // control de titulo
        if (tit.value.length <= 0) { 
      tit.classList.add("invalid") 
      } else { tit.classList.remove("invalid") }
    
    // control de url
        if (!url1.checkValidity()) {
      url1.classList.add("invalid")
      } else { url1.classList.remove("invalid") }

      
    // control de section
        if (sect.value.length <= 0) {
      sect.classList.add("invalid")
      } else { sect.classList.remove("invalid") }

    // control de contador
    if (conta.value.length <= 0) {
    conta.classList.add("invalid")
    } else { conta.classList.remove("invalid") }
    
    // finalmente habilito el botón si todo es válido
      if (nom.checkValidity() && tit.checkValidity() && conta.value.length > 3 && sect.checkValidity()) { 
      v.classList.remove('disabled');
      } else { v.classList.add('disabled') }
      //
}    

function ok() {
    var name = document.getElementById('nombre').value;
    var ok_titulo = document.getElementById('titulo').value;
    var ok_conta = document.getElementById('contador').value;
    var ok_url = document.getElementById('url').value;
    var prod = document.getElementById('section').value;
    var sp = " ";
    var punto = ". "
    var aparte = "\r\n\r\n";
    var renglon = "\r\n"
    var waStr = "Hola Osvaldo, soy"+ sp + name + punto + aparte +"Me interesa crear una web de" + sp + prod + punto + "El título sería" + sp + "'" + ok_titulo + "'" + punto + aparte + ok_conta + punto + renglon + "Web similar:" + sp + ok_url;
    var mensaje = "https://wa.me/543512600009?text=" + encodeURIComponent(waStr);
    window.open(mensaje);
}
