function changeText() {
	console.log("hello")
	h2 = document.getElementById("targetText")
	h2.textContent = "pass"
}

function loadData() {
	fetch("./data.json")
		.then(response => response.json())
		.then(data => console.log(data))
		.catch(error => console.error('Error fetching JSON', error));
}

