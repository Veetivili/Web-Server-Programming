const getHome = ('/home', (req, res) => {
    res.status(200).send('<h1>Home</h1> <p>Welcome to my home page</p>')
})

const getProfile = ('/profile/:user', (req, res) => {
    const { user } = req.query
    console.log(user)
    
    if (user !== 'user') {
        return res.status(401).send('Unauthorized')
    }
    
    else if (user === 'user') {
    res.status(200).send('<h1>Profile</h1> <p>Welcome to my profile page</p>')
    }
})

module.exports = { getHome, getProfile }