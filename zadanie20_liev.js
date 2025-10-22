// Autor: Kyrylo Lievichev, Nr 14

(function(){ 
function dist(x1,y1,x2,y2){return Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2));} 
var xa=parseFloat(prompt('xa=','0')), ya=parseFloat(prompt('ya=','0')), xb=parseFloat(prompt('xb=','3')), yb=parseFloat(prompt('yb=','0')), xc=parseFloat(prompt('xc=','0')), yc=parseFloat(prompt('yc=','4')); 
document.getElementById('output_20').innerHTML = 'AB='+dist(xa,ya,xb,yb).toFixed(2)+'<br>BC='+dist(xb,yb,xc,yc).toFixed(2)+'<br>AC='+dist(xa,ya,xc,yc).toFixed(2); 
})();
