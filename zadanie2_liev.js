// Autor: Kyrylo Lievichev, Nr 14


(function(){
  var out=document.getElementById('output_2');
  out.innerHTML += "ostatnia modyfikacja strony".fontcolor("red").bold().fontsize(7)+"<br>";
  out.innerHTML += document.lastModified;
})();
