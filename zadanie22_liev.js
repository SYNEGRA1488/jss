// Autor: Kyrylo Lievichev, Nr 14

(function(){ document.getElementById('output_22').innerHTML = 'a: <input id="a_dana_lie" value="4"> b: <input id="b_dana_lie" value="5"><button onclick="Pole_lie()">Pole</button><button onclick="Obwod_lie()">Obwod</button><div id="wyprowadz_pole_lie"></div><div id="wyprowadz_obwod_lie"></div>'; 
window.Pole_lie=function(){
var a=parseFloat(document.getElementById('a_dana_lie').value), b=parseFloat(document.getElementById('b_dana_lie').value); 
document.getElementById('wyprowadz_pole_lie').innerHTML='Pole='+ (a*b).toFixed(2);}; 
window.Obwod_lie=function(){
var a=parseFloat(document.getElementById('a_dana_lie').value), b=parseFloat(document.getElementById('b_dana_lie').value); 
document.getElementById('wyprowadz_obwod_lie').innerHTML='Obwod='+ (2*(a+b)).toFixed(2);}; 
})();
