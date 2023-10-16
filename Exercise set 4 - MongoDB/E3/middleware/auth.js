const login = (req, res, next) => {
  console.log(req.query)
  
  const { login } = req.query
  if (login === 'johndoe') {
    console.log('login OK')
    next()
  }
  else {
    next(new Error('Unauthorized'))
  }
}

module.exports = login