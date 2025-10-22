// Autor: Kyrylo Lievichev, Nr 14

(function(){ document.getElementById('output_8').innerHTML='<button onclick="show_confirm()">Pokaż confirm box</button>'; window.show_confirm=function(){var r=confirm('Naciśnij klawisz'); if(r==true) document.getElementById('output_8').innerHTML='Nacisnąłeś OK!'; else document.getElementById('output_8').innerHTML='Nacisnąłeś Cancel!';}; })();
