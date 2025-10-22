// Autor: Kyrylo Lievichev, Nr 14


(function(){
  var out=document.getElementById('output_4');
  out.innerHTML += '<button onclick="WinOpen_z3_liev()">zadanie3-Lievichev</button> ';
  out.innerHTML += '<button onclick="WinOpen_z4_liev()">zadanie4-Lievichev</button> ';
  out.innerHTML += '<button onclick="okno_zamknij_liev()">zamknij okno</button>';
  window.WinOpen_z3_liev = function(){ window.open('obraz_liev.html','okienko_z3_liev','toolbar=no,height=380,width=260'); }
  window.WinOpen_z4_liev = function(){ window.open('z4_liev.html','okienko_z4_liev','toolbar=no,height=600,width=480'); }
  window.okno_zamknij_liev = function(){ window.close(); }
})();
