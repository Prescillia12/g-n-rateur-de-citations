// const style = document.getElementById("style");
// const box = document.getElementById("box");

// style.addEventListener("click",()=>{

//     if (box.style.display == 'none') {
//         box.style.display='block';}
//     else {
//         box.style.display='none';
//     }
// })
// Gandhi

const citations = ["VIS COMME SI TU DEVAIS MOURIR DEMAIN. APPRENDS COMME SI TU DEVAIS VIVRE TOUJOURS.",
"JE N'AIME PAS LE MOT TOLÉRANCE, MAIS JE N'EN TROUVE PAS DE MEILLEUR.",
"LA VIE EST UN MYSTÈRE QU'IL FAUT VIVRE, ET NON UN PROBLÈME À RÉSOUDRE.",
"COLÈRE ET INTOLÉRANCE SONT LES ENNEMIS D'UNE BONNE COMPRÉHENSION.",
"JE NE M’INTÉRESSE QU’AUX QUALITÉS DES GENS. J’AI MOI-MÊME DES DÉFAUTS, DONC JE NE ME PERMETTRAIS PAS DE JUGER CEUX DES AUTRES."];

const citer = document.getElementById("citer");

const generer = document.getElementById("generer");



generer.addEventListener("click",()=>{
    const numero = Math.floor(Math.random() * 5);
    citer.textContent = citations[numero]})
    
    
