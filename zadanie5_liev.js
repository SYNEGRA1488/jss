// Autor: Kyrylo Lievichev, Nr 14


(function(){
  var out=document.getElementById('output_5');
  out.innerHTML = 'obliczamy układ<br>';
  for(var k=1;k<=4;k++){ out.innerHTML += '<button onclick="WinOpen_g('+k+')">grafika'+k+'</button> '; }
  window.WinOpen_g = function(k){ window.open('grafika'+k+'_liev.html','graf'+k,'toolbar=no,height=300,width=300,left='+ (100 + (k%2)*320) +',top='+(100 + Math.floor((k-1)/2)*320)); };
})();
