// Autor: Kyrylo Lievichev, Nr 14

(function(){ var a=parseFloat(prompt('a=','3')); var b=parseFloat(prompt('b=','4')); function suma_trz(a,b){return a+b;} function odejm_trz(a,b){return a-b;} function mnoz_trz(a,b){return a*b;} function od_kw_trz(a,b){return {a2:a*a,b2:b*b};} function reszta_trz(a,b){return a%b;} var q=od_kw_trz(a,b); document.getElementById('output_18').innerHTML = 'suma='+suma_trz(a,b)+'<br>odejmowanie='+odejm_trz(a,b)+'<br>mnozenie='+mnoz_trz(a,b)+'<br>'+a+'^2='+q.a2+' , '+b+'^2='+q.b2+'<br>reszta='+reszta_trz(a,b); })();
