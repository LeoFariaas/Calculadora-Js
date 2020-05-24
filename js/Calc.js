var vetor = [];

function funcao(param) {
    var txt = document.getElementById('txt');
    vetor.push(param);
    txt.innerHTML = (param);
}

function resultado() {
    var result = "";
    for (var i=0;i<vetor.length;i++) {
        result += vetor[i];
    }
    result = eval(result);
    txt.innerHTML = (result);
}

function limpar() {
    for(var c = 1; c<vetor.length; c++) {
        vetor=vetor.splice();
    }
    result = 0;
    txt.innerHTML = " ";
}