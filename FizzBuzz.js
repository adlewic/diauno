
// FizzBuzz ////////////////////

// elnumero = la variable que iniciamos con el valor 1 . 
// %  controlador Modulus (division remainder), lo usamos para saber 
<script>
 for (var elnumero=1; elnumero <= 50; elnumero++){

 	if (elnumero % 3 && elnumero % 5){
 		console.log(elnumero);
 	}else {
 		if (elnumero % 3 == 0){
 			console.log("Fizz");
 		} 
 		if (elnumero % 5 == 0){
 			console.log("Buzz");
 		}
  	}
 }
</script>
/////////////// Piedra, papel , tijera ////////////////////

