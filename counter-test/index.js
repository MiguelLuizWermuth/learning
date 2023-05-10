let contador = 0;

document.getElementById('diminui').onclick = function(){
    contador-=1;
    document.getElementById('contador').innerHTML = contador;
}
document.getElementById('reseta').onclick = function(){
    contador=0;
    document.getElementById('contador').innerHTML = contador;
}
document.getElementById('aumenta').onclick = function(){
    contador+=1;
    document.getElementById('contador').innerHTML = contador;
}