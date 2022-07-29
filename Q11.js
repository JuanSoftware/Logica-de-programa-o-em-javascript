var par=0;
var impar=0;
for(i=100; i--;){
    var n=parseInt(prompt("Digite um numero"))
    if(n%2==0){
        par=par+n
    }
    if(n%2!=0){
        impar=impar+n
    }
}
console.log(par,impar)
