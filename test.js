function loadData() {
	fetch("./data.json")
		.then(response => response.json())
		.then(data => console.log(data))
		.catch(error => console.error('Error fetching JSON', error));
};

function buildTable(elementId, data) {
	table = `<thead>
			<td>Nome</td>
			<td>Tipo</td>
		</thead>
		<tbody>
			<tr>
				<td>Picanha</td>
				<td>bovina</td>
			</tr>
			<tr>
				<td>Costela</td>
				<td>suína</td>
			</tr>
		</tbody>`
	element = document.getElementById(elementId)
	element.value = table
}
