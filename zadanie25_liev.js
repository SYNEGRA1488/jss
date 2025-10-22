// Autor: Kyrylo Lievichev, Nr 14

(function(){ 
var No=parseFloat(prompt('No =','1000')), t=parseFloat(prompt('t (lata) =','1000')), T12=parseFloat(prompt('T1/2 (lata) =','5700')); 
var lambda=Math.LN2/T12; 
var N=No*Math.exp(-lambda*t); document.getElementById('output_25').innerHTML='No='+No+'<br>t='+t+' lata<br>T1/2='+T12+' lata<br>lambda='+lambda.toFixed(7)+' [1/rok]<br>N(t) = '+N.toFixed(2); 
})();
