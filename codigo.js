
var bien = document.getElementsByName('correcto');
var mal = document.getElementsByName('incorrecto');
var puntos = 0;


for(i=0; i<bien.length; i++){
    bien[i].addEventListener('click', respondioBien);
}

for(i=0; i<mal.length; i++){
    mal[i].addEventListener('click', respondioMal);
}


 
function respondioBien(){
    alert('Respondiste Bien');
}

function respondioMal(){
    alert('Respondiste mal');
}


