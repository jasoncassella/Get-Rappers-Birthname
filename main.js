document.querySelector('button').addEventListener('click', getRapName);

async function getRapName() {
	const rapName = document.querySelector('input').value;
	try {
		const res = await fetch(`https://rap-api-jasoncassella.herokuapp.com/api/rappers/${rapName}`);
		const data = await res.json();
		console.log(data);
		document.querySelector('h2').textContent = `Result: ${data.birthName}`;
	} catch (err) {
		console.log(err);
	}
}
