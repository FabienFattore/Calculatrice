let memoire= "";
let afficher = document.querySelector('#ecran');


// récuperation des valeurs 
document.querySelector('#btnChiffre-7').addEventListener("click", (e) => {
    console.log(e.target.value);
    memoire += '7';
    afficher.innerText = memoire;
});

document.querySelector('#btnChiffre-8').addEventListener("click", (e) => {
    console.log(e.target.value);
    memoire += '8';
    afficher.innerText = memoire;
    
});

document.querySelector('#btnChiffre-9').addEventListener("click", (e) => {
    console.log(e.target.value);
    memoire += '9';
    afficher.innerText = memoire;
});

document.querySelector('#btnChiffre-4').addEventListener("click", (e) => {
    console.log(e.target.value);
    memoire += '4';
    afficher.innerText = memoire;
});

document.querySelector('#btnChiffre-5').addEventListener("click", (e) => {
    console.log(e.target.value);
    memoire += '5';
    afficher.innerText = memoire;
});

document.querySelector('#btnChiffre-6').addEventListener("click", (e) => {
    console.log(e.target.value);
    memoire += '6';
    afficher.innerText = memoire;
});

document.querySelector('#btnChiffre-1').addEventListener("click", (e) => {
    console.log(e.target.value);
    memoire += '1';
    afficher.innerText = memoire;
});

document.querySelector('#btnChiffre-2').addEventListener("click", (e) => {
    console.log(e.target.value);
    memoire += '2';
    afficher.innerText = memoire;
});

document.querySelector('#btnChiffre-3').addEventListener("click", (e) => {
    console.log(e.target.value);
    memoire += '3';
    afficher.innerText = memoire;
});

document.querySelector('#btnChiffre-0').addEventListener("click", (e) => {
    console.log(e.target.value);
    memoire += '0';
    afficher.innerText = memoire;
});
document.querySelector('#add').addEventListener("click", (e) => {
    console.log(e.target.value);
    memoire += '+';
    afficher.innerText = memoire;
});
document.querySelector('#sous').addEventListener("click", (e) => {
    console.log(e.target.value);
    memoire += '-';
    afficher.innerText = memoire;
});
document.querySelector('#mul').addEventListener("click", (e) => {
    console.log(e.target.value);
    memoire += '*';
    afficher.innerText = memoire;
});
document.querySelector('#div').addEventListener("click", (e) => {
    console.log(e.target.value);
    memoire += '/';
    afficher.innerText = memoire;
});
document.querySelector('#ce').addEventListener("click", (e) => {
    memoire = "";
    document.getElementById('ecran').innerHTML= ""    
});
document.querySelector('#del').addEventListener("click", (e) => {
    memoire=memoire.slice(0 ,-1)
    document.getElementById('ecran').innerHTML= memoire;
});
document.getElementById('egal').addEventListener("click", (e) =>{
    memoire=eval(memoire);
    document.getElementById('ecran').innerHTML = memoire;
})


