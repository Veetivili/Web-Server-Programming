const result = document.getElementById('result')
const baseUrl = `${window.location.origin}`

const fetchAlbums = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/api/albums`)
    console.log(data)
    console.log(`${baseUrl}/api/albums`)

    const albumsData = data.map((album) => {
      return `
      <div style="border: 1px solid black; border-radius: 1em; margin-bottom: 10px; width:50%">
      <ul>
        <li>Id: ${album.id}</li>
        <li>Artist: ${album.artist}</li>
        <li>Title: ${album.title}</li>
        <li>Year: ${album.year}</li>
        <li>Genre: ${album.genre}</li>
        <li>Tracks: ${album.tracks}</li>
      </ul>
      </div>
      `;
    })
    result.innerHTML = albumsData.join('')
  } catch (error) {
    console.log(error)
    result.innerHTML = '<div class="alert alert-danger">Could not fetch data</div>';
  }
}

fetchAlbums();