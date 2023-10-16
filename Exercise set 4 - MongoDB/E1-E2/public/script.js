
const result = document.querySelector(".result");
const baseUrl = `${window.location.origin}/api`;

const fetchRecords = async () => {
	try {
		const { data } = await axios.get(`${baseUrl}/records?user=ab0197`);

		const records = data.map((record) => {
			return `
                <li>
                    <div class="album-id">ID: ${record.id}</div>
                    <div class="album-artist">${record.artist}</div>
                    <div class="album-title">${record.title}</div>
                    <div class="album-detail">Year: ${record.year}</div>
                    <div class="album-detail">Genre: ${record.genre}</div>
                    <div class="album-detail">Tracks: ${record.tracks}</div>
                </li>
            `;
		});

		result.innerHTML = records.join("");
	} catch (error) {
		console.log(error);
		result.innerHTML = "<div class=\"alert alert-danger\">Could not fetch data</div>";
	}
};

fetchRecords();

function handleSubmit(event) {
	event.preventDefault();
	const e = document.getElementById("error");
	e.style.display = "none";

	const user = document.getElementById("user").value;

	const data = {
		id: document.getElementById("id").value,
		artist: document.getElementById("artist").value,
		title: document.getElementById("title").value,
		year: document.getElementById("year").value,
		genre: document.getElementById("genre").value,
		tracks: document.getElementById("tracks").value,
	};

	axios
		.post(`/api/records?user=${user}`, data)
		.then((result) => {
			console.log(result.data);
			event.target.reset();
			fetchRecords();
		})
		.catch((error) => {
			console.log(error);
			e.style.display = "block";
		});
}

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

