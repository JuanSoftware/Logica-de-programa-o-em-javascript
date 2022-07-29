var avista=0;
var prazo=0;

while(true){
    var venda= prompt("Digite V para a vista e P para a prazo")
    if (venda=="V"){
        var valor= parseInt(prompt("Digite o valor da vend"))
        avista=avista+valor
    }
    if (venda=="P"){
        var valor= parseInt(prompt("Digite o valor da venda"))
        prazo=prazo+valor
    }
    
    if (venda!="V" & venda!="P"){
        break;
    }
}
var tot= avista+prazo
console.log(avista,prazo,tot)
