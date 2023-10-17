function notFoundMiddleware(req,res,next) {
	res.send("<h1>Route does not exist</h1>");
}
  
module.exports = notFoundMiddleware;
  