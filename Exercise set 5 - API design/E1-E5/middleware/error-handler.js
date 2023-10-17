const APIError = require("../errors/apierror");

const errorHandlerMiddleware = (err, req, res, next) => {
	console.log(err);
	if (err instanceof APIError) {
		return res.status(err.statusCode).json({ msg: err.message });
	}
	return res.status(500).json({msg: "There was an error!"});
};

module.exports = errorHandlerMiddleware;
