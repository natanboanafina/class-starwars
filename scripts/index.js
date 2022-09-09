const char = document.querySelector('#characters');
const vehicle = document.querySelector('#vehicles');
const results = document.querySelector('#results');

char.addEventListener('click', (e) => {
	const value = e.target.value;

	try {
		fetchData(name);
		if (value === 'Characters') {
			fetchData('people');
		}
	} catch (err) {
		throw new Error(err);
	}
});

async function fetchData(name) {
	const { data } = await axios.get(`https://swapi.dev/api/${name}`, {
		headers: { 'Content-Type': 'application/json' },
	});
	console.table(data);
}
