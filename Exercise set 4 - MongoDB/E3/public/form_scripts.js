const result = document.querySelector('.result')
const baseUrl = `${window.location.origin}/api`
const fetchVehicles = async (search_string) => {
  const url = search_string != '' ? `${baseUrl}/query?search=${search_string}` : `${baseUrl}/vehicles`

  try {
    const { data } = await axios.get(url)
    console.log(data)
    const vehicles = data.data.map((vehicle) => {
      return createVehicleCard(vehicle)
    })
    result.innerHTML = `<div class="row">
                         ${vehicles.join('')} 
                        </div>`
  } catch (error) {
    console.log(error)
    result.innerHTML = '<div class="alert alert-danger mt-3">Error fetching data</div>'
  }
}

const createVehicleCard = (vehicle) => {
  return `<div class="col-sm-4 pt-4">
            <div class="card">
              <div class="card-body">
              <h5 class="card-title">${vehicle.make}</h5>
              <p class="card-text">${vehicle.model}</p>
              <p class="card-text">${vehicle.type}</p>
              <p class="card-text">${vehicle.license_plate}</p>
              </div>
            </div>
          </div>
          `
}

const emptyFields = (make, model, license_plate) => {
  make.value = ''
  model.value = ''
  license_plate.value = ''
}

const setNotification = (msg) => {
  formAlert = document.querySelector('.form-alert')
  formAlert.textContent = msg
  setTimeout(() => {
    formAlert.textContent = '' }, 5000)
}

// search functionality
const searchField = document.querySelector('#searchField')
searchField.addEventListener('input', async (e) => {
  e.preventDefault()
  const search_string = searchField.value
  fetchVehicles(search_string)
})

// submit form
const btn = document.querySelector('.btn-primary')
const make = document.querySelector('#make')
const model = document.querySelector('#model')
const license_plate = document.querySelector('#license_plate')

btn.addEventListener('click', async (e) => {
  e.preventDefault()
  const makeValue = make.value
  const modelValue = model.value
  const license_plateValue = license_plate.value

  try {
    console.log(license_plateValue)
    const { data } = await axios.post(`${baseUrl}/vehicles`, { make: makeValue, model: modelValue, license_plate: license_plateValue })
    fetchVehicles('')
    emptyFields(make, model, license_plateValue)
  } catch (error) {
    const { msg } = error.response.data
    setNotification(msg)
  }
})

// Fetch vehicles on page load
fetchVehicles(search_string = '')