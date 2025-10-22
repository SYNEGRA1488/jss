// Autor: Kyrylo Lievichev, Nr 14

(function(){ var D=parseFloat(prompt('D - wysokość oparcia drabiny (m)','5')), X=parseFloat(prompt('X - odległość od muru (m)','3')); var length=Math.sqrt(D*D+X*X); var angleRad=Math.atan(D/X); var angleDeg=angleRad*180/Math.PI; document.getElementById('output_23').innerHTML='Długość drabiny = '+length.toFixed(2)+' m<br>Kąt nachylenia = '+angleDeg.toFixed(2)+' stopni'; })();
