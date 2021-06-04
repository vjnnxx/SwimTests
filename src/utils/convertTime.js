//Função que converte o tempo em texto com a notação de minutos e segundos
function convertTime(tempo){
    let tempoText;

    if(tempo % 60 != 0){
        let segundos = tempo % 60;
        tempo = tempo/60;
        tempoText = Math.floor(tempo) + "'" + Math.floor(segundos) + "''";
    } else {
        tempo = tempo/60;
        tempoText = tempo + "'";
    }

    return tempoText;
}

export {convertTime};