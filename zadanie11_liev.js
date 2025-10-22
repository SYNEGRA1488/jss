// Autor: Kyrylo Lievichev, Nr 14

(function(){ var D1=parseInt(prompt('D1=','30')); 
var D2=parseInt(prompt('D2=','28'));
var seconds=(D1-D2)*24*3600; 
document.getElementById('output_11').innerHTML = "<div style='color:green;font-size:" + (30+14) + "px;'>ilość sekund = " + seconds + " sekund</div>"; 
})();
