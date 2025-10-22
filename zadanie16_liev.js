// Autor: Kyrylo Lievichev, Nr 14

(function(){ var A=parseFloat(prompt('A=','1')); var B=parseFloat(prompt('B=','2')); var p1=Math.pow(A+B,3); var p2=Math.pow(A,3)+3*Math.pow(A,2)*B+3*A*Math.pow(B,2)+Math.pow(B,3); document.getElementById('output_16').innerHTML = '('+A+' + '+B+')^3 = '+p1+'<br>'+p2; })();
