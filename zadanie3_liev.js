// Autor: Kyrylo Lievichev, Nr 14


(function(){
  var out=document.getElementById('output_3');
  out.innerHTML += '<button onclick="WinOpen_liev()">zadanie3-Lievichev</button>';
  window.WinOpen_liev = function(){ window.open('obraz_liev.html','okienko_liev','toolbar=no,directories=no,menubar=no,height=380,width=260'); };
})();
