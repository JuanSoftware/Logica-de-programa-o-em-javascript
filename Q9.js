var cad1=0;
var cad2=0;
var cad3=0;
var cad4=0;
var nulo=0;
var branco=0;
while(true){
    var voto= parseInt(prompt("Digite seu voto"))

    if (voto==1){
        cad1+=1
    }
    if (voto==2){
        cad2+=1
    }
    if (voto==3){
        cad3+=1
    }
    if (voto==4){
        cad4+=1
    }
    if (voto==5){
        nulo+=1
    }
    if (voto==6){
        branco+=1
    }
    if (voto==0){
        break;
    }
}
console.log(cad1,cad2,cad3,cad4,nulo,branco)
