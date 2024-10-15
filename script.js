
function redirecionar(){
    let select = document.getElementById('sobreitarema');
    let url = select.options[select.selectedIndex].value;
    if(url){
        window.location.href = url;
    }
}
redirecionar();

function redirecionar2(){
    let select = document.getElementById('pindiginas');
    let url = select.options[select.selectedIndex].value;
    if(url){
        window.location.href = url;
    }
}
redirecionar2();