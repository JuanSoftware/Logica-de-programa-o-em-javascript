let n1 = 0;
let n2 = 1;
let n3;
let termoN = parseInt(prompt('Digite o termo desejado: '))
if (termoN === 1){
    console.log(n1)
} else if (termoN === 2){
    console.log(n2)
} else {
    for ( i = 3; i <= termoN; i++){
    n3 = n1 + n2;
    n1 = n2
    n2 = n3
    }
console.log(n3)    
}
