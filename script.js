// DETERMINADO
// console.log(example);
// ejemplo de var = "I'm the example!";
// DESPUÉS DE QUE SEA ELEVADO POR EL INTÉRPRETE
var example;
console.log(example); // registros indefinidos
example = "I'm the example!";

/*Interprete deberia entregar valor example como indefinido */


/*Ejecuta el mismo código de arriba con una sintaxis ES6 y compara tus resultados:*/
console.log(example); /*Envía mensaje de error al usar sintaxi ES6 */
let example = "I'm the example!";   

/**Ejercicio 1 */
console.log(example); /**funsion detecta valor undefinid e imprime 'I`m the exsmple */
var example = "I'm the example!";    

/** Ejercicio 2 */
var needle = 'haystack';
test();
function test(){    /** funcion imprime 'magnet' */
	var needle = 'magnet';
	console.log(needle);
}

/**Ejercicio 3: funcion imprime 'super cool' */ 
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);

/**Ejercicio 4: imprime 'chicken' y la funcion imprime 'half-chicken' */
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}

/**Ejercicio 5: mean esta no esta definda como funsion - error */
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

/**Ejercicio 6: undefinid, imprime 'rock', 'r&b' y 'disco' */
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);

/**Ejercicio 7: undefined, imprime 'san jose', 'seattle', 'burbank', 'san jose' */
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);

/**Ejercicio 8: imprime 'chicago', 65, true mas 'closed for now', 0 */
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo.name = "closed for now";
        }
        return dojo;
}



















