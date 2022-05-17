const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

show(icons);	// stampo l'array completo

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