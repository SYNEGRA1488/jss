// Autor: Kyrylo Lievichev, Nr 14

(function(){ document.getElementById('output_9').innerHTML='<button onclick="show_prompt()">Pokaż prompt box</button>'; window.show_prompt=function(){var name=prompt('Napisz imię','Kyrylo'); if(name!=null && name!='') document.getElementById('output_9').innerHTML='Witaj '+name+'! jak się masz?';}; })();
