var um=0;
var dois=0;
var tres=0;
for(i=4;i--;){
    var num= parseInt(prompt("Digite um numero"))
    if (num >= um){
    		 dois=um;
    		 tres=dois;
    		 um=num;
    		 }
    			 else{
    			 if (num>=dois){
    				 tres=dois;
    					 dois=num;
    			 }
    					 else if (num >= tres)
    					 tres=num;
    			 }
	 }
console.log(um,dois,tres)
