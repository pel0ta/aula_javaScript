function clicou(){
    document.getElementById("agradecimento").innerHTML="<b>obrigado por clicar</b>";
    
    //console.log(document.getElementById("agradecimento"));
}
function mudar(){
    window.open("https://www.google.com.br/?gws_rd=ssl");
    //window.location.href="https://www.google.com.br/?gws_rd=ssl";
}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML="obrigado por pausar o mouse";
    elemento.innerHTML="obrigado por pausar o mouse";
    //alert("trocar texto");
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML="passe o mouse aqui";
    elemento.innerHTML="passe o mouse aqui";
}
function load(){
    alert("pagina carregada");
}
function funcaochange(elemento){
    console.log(elemento.value);
}

/*
function clicou(){
    alert("obrigado por clicar")
}
*/
/*
var validar=0;
function validaIdade(idade){
    validar;
    if(idade>=18){
        validar=true;
    }else{
        validar=false;
    }
    return validar;
}
var idade=prompt("qual a sua idade");
validaIdade(idade);
console.log(validar);
*/

/*
function soma(n1,n2){
    return n1+n2;
}

function setreplace(frase,nome,novo_nome){
    return frase.replace(nome,novo_nome);
}
alert(soma(5,10));
alert(setreplace("vai Japão","Japão","Brasil"));
*/
//var d=new Date();
//alert(d);
//alert(d.getDate());
//alert(d.getMonth()+1);
//alert(d.getDay());
//alert(d.getHours());
//alert(d.getMinutes());

/*
var count;
for(count=0;count<=5;count++){
    alert(count);
}
*/
/*
var count=0;
while(count<=5){
    //console.log(count);
    alert(count);
    count++;
    //count=count+1;
}
*/

/*
var idade=prompt("qual sua idade");
//var idade=18;
if(idade>=18){
    alert("maior de idade");
}else{
    alert("menor de idade")
}
*/

/*
var frutas=[{nome:"maça",cor:"vermelha"},{nome:"uva",cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta={nome:"maça",cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/
//var lista=["maça","pêra","laranja"];
//lista.push("uva");//adiciona um elemento em uma lista 
//lista.pop();//remove o ultimo elemento da lista
//console.log(lista.length);//retorna o tamanho da lista
//console.log(lista.reverse());
//console.log(lista);
//alert(lista[1]);
//console.log(lista.toString());//retorna o array em forma de string
//console.log(lista[0]);
//console.log(lista.toString()[0]);
//console.log(lista.join(" - "))

/*
var nome="Marcus Antonio";
var idade=25;
var idade2=10;
var frase="Japão é o melhor time do mundo";
//alert(nome+" tem "+idade+" anos");
//alert(idade+idade2);
console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("Japão","Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
alert(frase.replace("Japão","Brasil"));
*/
