// Autor: Kyrylo Lievichev, Nr 14

(function(){ var D1=parseInt(prompt('D1=','30')); 
var G1=parseInt(prompt('G1=','4')); 
var D2=parseInt(prompt('D2=','28')); 
var G2=parseInt(prompt('G2=','22')); var t1=((D1-1)*24+G1)*3600; 
var t2=((D2-1)*24+G2)*3600;
var seconds=t1-t2; document.getElementById('output_12').innerHTML = "<div style='color:green;font-size:" + (30+14) + "px;'>ilość sekund = " + seconds + " sekund</div>";
})();
