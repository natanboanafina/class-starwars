const char = document.querySelector('#characters');
const vehicle = document.querySelector('#vehicles');
const results = document.querySelector('#results');

char.addEventListener('click', (e) => {
	const value = e.target.value;

	if (value === 'Personagens') {
		try {
			fetchData('people');
		} catch (err) {
			throw new Error(err);
		}
	}
});
vehicle.addEventListener('click', (e) => {
	const value = e.target.value;

	if (value === 'Veículos') {
		try {
			fetchData('vehicles');
		} catch (err) {
			throw new Error(err);
		}
	}
});

async function fetchData(name) {
	const { data } = await axios.get(`https://swapi.dev/api/${name}`, {
		headers: { 'Content-Type': 'application/json' },
	});
	console.table('Fetch Data: ', data.results);
	renderChar(data);
	renderVeh(data);
}

//Continuar daqui
function renderChar(data) {
	let newResults = '';
	data.results.map((person) => {
		return (newResults += `
		<div class="container grid" >
		<div class="row align-items-center justify-content-md-center">
		<div class="col-sm">
		<div class="card border-primary mb-1" >
			<div class="card-body text-secondary">
				<h2 class="h2">Nome: ${person.name}<h2>
				<p class="h3">Altura: ${person.height}</p>
				<p class="h3">Peso: ${person.mass}</p>
				<p class="h3">Cor do Cabelo: ${person.hair_color}</p>
				<p class="h3">Cor da Pele: ${person.skin_color}</p>
				<p class="h3">Cor dos Olhos: ${person.eye_color}</p>
				<p class="h3">Ano de Nascimento: ${person.birth_year}</p>
				<p class="h3">Sexo: ${person.gender}</p>
			</div>
			</div>
			</div>
		</div>
		</div>
		`);
	});

	results.innerHTML = newResults;
}

function renderVeh(data) {
	let newResults = '';
	data.results.map((vehicle) => {
		return (newResults += `
		<div class="container grid" >
		<div class="row align-items-center justify-content-md-center">
		<div class="col-sm">
		<div class="card border-primary mb-1" >
			<div class="card-body text-secondary">
				<h2 class="h2">Nome: ${vehicle.name}<h2>
				<p class="h3">Modelo: ${vehicle.model}</p>
				<p class="h3">Fabricante: ${vehicle.manufacturer}</p>
				<p class="h3">Preço: ${vehicle.cost_in_credits}</p>
				<p class="h3">Comprimento: ${vehicle.length}</p>
				<p class="h3">Max Atmosphering Speed: ${vehicle.max_atmosphering_speed}</p>
				<p class="h3">Tripulação: ${vehicle.crew}</p>
				<p class="h3">Passageiros: ${vehicle.passengers}</p>
				<p class="h3">Capacidade de Carga: ${vehicle.cargo_capacity}</p>
				<p class="h3">Perecíveis: ${vehicle.consumables}</p>
				<p class="h3">Classe do Veículo: ${vehicle.vehicle_class}</p>
			</div>
			</div>
			</div>
		</div>
		</div>
		`);
	});

	results.innerHTML = newResults;
}
