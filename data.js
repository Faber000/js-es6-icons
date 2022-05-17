const colorCaracters = ['A','B','C','D','E','F','0','1','2','3','4','5','6','7','8','9']; 
const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: randomColor()
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: randomColor()
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: randomColor()
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: randomColor()
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: randomColor()
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: randomColor()
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: randomColor()
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: randomColor()
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: randomColor()
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: randomColor()
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: randomColor()
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: randomColor()
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: randomColor()
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: randomColor()
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: randomColor()
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: randomColor()
	}
];

show(icons);  // stampo l'array completo

// popolo le options della select dinamicamente
let element = document.querySelector('select');
element.options.add(new Option('All'));
element.options.add(new Option('animal'));
element.options.add(new Option('vegetable'));
element.options.add(new Option('user'));

function show(icons) {
	for (let i=0; i < icons.length; i++) {

		// creo le classi del FontAwesome
		let className1 = icons[i].prefix+"solid";
		let className2 = icons[i].prefix+icons[i].name;
	
		// creo l'elemento e aggiungo le classi alla ClassList
		let element = document.createElement("i");
		element.classList.add(className1);
		element.classList.add(className2);
	
		// aggiungo il colore all'elemento
		element.style.color = icons[i].color;
	
		// creo il div e inserisco l'elemento
		let div = document.createElement("div");
		div.classList.add("item");
		div.append(element);
	
		// inserisco il div nel container
		document.querySelector(".container").append(div);
	}
}

// assegno un handler alla select
let select = document.getElementById("iconsType");
select.addEventListener("change", changeType);

// funzione richiamata al cambio del valore nella select
function changeType() {

	// pulisco il contenuto della pagina
	let container = document.querySelector(".container");
	container.innerHTML="";

	// ricavo il valore della select 
	let type = select.value;

	// riempio il nuovo array filtrando gli elementi dell'array originale di un determinato tipo
	if (type != "All") {
		const array = icons.filter(icon => icon.type == type);
		show(array);
	} else {
		show(icons);
	}
}
// funzione che restituisce un colore casuale
function randomColor() {
	let color = "#";
	
	// concateno 6 diversi caratteri presi casualmente dall'array "colorCaracters"
	for (let i=0; i < 6; i++) {
		color += (colorCaracters[Math.floor(Math.random() * 17)]);
	}
	return color;
}