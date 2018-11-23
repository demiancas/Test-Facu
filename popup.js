function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it



document.getElementById('MPV2').onclick = function(){
    localStorage.ultimo = "MPV2";
    openCity(event, 'MPV');}




document.getElementById(localStorage.ultimo).click();


function muestra_oculta(id){
if (document.getElementById){ //se obtiene el id
var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
    }
}


document.getElementById('muestra').onclick = function(){
muestra_oculta('contenido');
};
document.addEventListener('DOMContentLoaded', function(){
muestra_oculta('contenido');
});

document.addEventListener('DOMContentLoaded', hacerClick);

