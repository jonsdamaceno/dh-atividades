const tempoPipoca = 10;
const tempoMacarrao = 8;
const tempoCarne = 15;
const tempoFeijao = 12;
const tempoBrigadeiro = 8;

function microondas (opcao, tempo) {
    switch (opcao){
        case 'pipoca':
            getPipoca(tempo);
            break;
        case 'macarrao':
            getMacarrao(tempo);
            break;
        case 'carne':
            getCarne(tempo);
            break;
        case 'feijao':
            getFeijao(tempo);
            break;
        case 'brigadeiro':
            getBrigadeiro(tempo);
            break;
        default:
            console.log('Prato inxistente');
            break;
    }
}

function getPipoca (tempo) {
    if (tempo > 3 * tempoPipoca){
        console.log('pipipi finalizado\nkabuuuum');
    } else if (tempo > 2 * tempoPipoca){
console.log('pipipi finalizado\nA comida queimou');
    } else if (tempo < tempoPipoca){ 
        console.log('pipipi finalizado\nTempo insuficiente! Sua comida ainda está fria...');
    } else {
        console.log('pipipi finalizado\nBoa refeição');
    }
}

function getMacarrao (tempo) { 
    if (tempo > 3 * tempoMacarrao){
        console.log('pipipi finalizado\nkabuuuum');
    } else if (tempo > 2 * tempoMacarrao){
        console.log('pipipi finalizado\nA comida queimou');
    } else if (tempo < tempoMacarrao){
        console.log('pipipi finalizado\nTempo insuficiente! Sua comida ainda está fria...');
    } else {
        console.log('pipipi finalizado\nBoa refeição');
    }
}

function getCarne (tempo) { 
    if (tempo > 3 * tempoCarne){
        console.log('pipipi finalizado');
        console.log('kabuuuum');
    } else if (tempo > 2 * tempoCarne){
        console.log('pipipi finalizado\nA comida queimou');
    } else if (tempo < tempoCarne){
        console.log('pipipi finalizado\nTempo insuficiente! Sua comida ainda está fria...');
    } else {
        console.log('pipipi finalizado\nBoa refeição');
    }
}

function getFeijao (tempo) { 
    if (tempo > 3 * tempoFeijao){
        console.log('pipipi finalizado\nkabuuuum');
    } else if (tempo > 2 * tempoFeijao){
        console.log('pipipi finalizado\nA comida queimou');
    } else if (tempo < tempoFeijao){
        console.log('pipipi finalizado\nTempo insuficiente! Sua comida ainda está fria...');
    } else {
        console.log('pipipi finalizado\nBoa refeição');
    }
}

function getBrigadeiro (tempo) { 
    if (tempo > 3 * tempoBrigadeiro){
        console.log('pipipi finalizado\nkabuuuum');
    } else if (tempo > 2 * tempoBrigadeiro){
        console.log('pipipi finalizado\nA comida queimou');
    } else if (tempo < tempoBrigadeiro){
        console.log('pipipi finalizado\nTempo insuficiente! Sua comida ainda está fria...');
    } else {
        console.log('pipipi finalizado\nBoa refeição');
    }
}

microondas('brigadeiro', 9); 

microondas('carne', 35);

microondas('batata frita', 21);

microondas('feijao', 5);