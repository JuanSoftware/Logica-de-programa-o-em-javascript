var a= prompt("Digite o primeiro numero")
var b= prompt("Digite o segundo numero")
var c= prompt("Digite o terceiro numero")
var d=prompt("Digite o quarto numero")

var aux = a;
if(d==1){
     if(b < a){
      aux=b;
      b=a;
      a=aux;
     }

     if(c < a){
      aux=c;
      c=a;
      a=aux;
     }

     if(c < b){
      aux=c;
      c=b;
      b=aux;
     }
     alert(a+"-"+b+"-"+c);
    
}
if(d==2){
     if(b > a){
      aux=b;
      b=a;
      a=aux;
     }

     if(c > a){
      aux=c;
      c=a;
      a=aux;
     }

     if(c > b){
      aux=c;
      c=b;
      b=aux;
     }
     alert(a+"-"+b+"-"+c);
    
}
if(d==3){
     if(b > a){
      aux=b;
      b=a;
      a=aux;
     }

     if(c > a){
      aux=c;
      c=a;
      a=aux;
     }

     if(c > b){
      aux=c;
      c=b;
      b=aux;
     }
     alert(a+"-"+c+"-"+b);
}
