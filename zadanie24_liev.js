// Autor: Kyrylo Lievichev, Nr 14

(function(){ var x1=parseFloat(prompt('x1 (deg) =','30')), x2=parseFloat(prompt('x2 =','2')); var out=document.getElementById('output_24'); out.innerHTML='wczytane liczby: x1='+x1+'    x2='+x2+'<br>'; var y1=Math.pow(x1,x2); out.innerHTML+='y1 = '+y1.toFixed(2)+'<br>'; var rad=(x1*Math.PI)/180; out.innerHTML+='x1 [stopniach] = '+x1+' , x1 [radianach] = '+rad.toFixed(2)+'<br>'; var y2=Math.sin(rad)+Math.cos(rad); out.innerHTML+='y2 = '+y2.toFixed(2)+'<br>'; var y3=Math.sqrt(Math.abs(x1))+Math.pow(x2,3); out.innerHTML+='y3 = '+y3.toFixed(2); })();
