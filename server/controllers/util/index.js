const constants = require("../../loaders/constants");

function handleResponse(res) {
    return function(result) {
        // Handle empty responses
        if (!result) throw { name: constants.error.NOT_FOUND };

        // Handle good response
        res.status(200).json({
            status: constants.api.SUCCESS,
            data: result
        });
    }
}

function handleError(res) {
    return function(err) {
        message = {};
        console.log(err);
        switch(err.name) {
            case constants.error.VALIDATION:
                for (var errName in err.errors)
                    message[errName] = err.errors[errName].message;
    
                return res.status(400).json({
                    status: constants.api.FAIL,
                    message: message
                });

            case constants.error.NOT_FOUND:
                return res.status(404).json({
                    status: constants.api.FAIL,
                    message: message
                });

            case constants.error.FORBIDDEN:
                return res.status(403).json({
                    status: constants.api.FAIL,
                    message: message
                });

            default:
                return res.status(500).json({
                    status: constants.api.ERROR,
                    message: message
                });
        }
    }
}

module.exports = {
    handleResponse,
    handleError
}