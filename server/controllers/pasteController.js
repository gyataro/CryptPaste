const Paste = require("../models/pasteModel");

const { handleError, handleResponse } = require("./util");
const { handleBurn, handleSecret } = require("./util/pasteUtil");

exports.getAllPastes = async (req, res, next) => {
    Paste
        .find()
        .then(handleResponse(res))
        .catch(handleError(res));
};

exports.getOnePaste = async (req, res, next) => {
    Paste
        .findOneAndUpdate({ urlId: req.params.id }, {$inc: {views: 1}})
        .then(handleSecret(req))
        .then(handleBurn())
        .then(handleResponse(res))
        .catch(handleError(res));
};

exports.createPaste = async (req, res, next) => {
    Paste
        .create(req.body)
        .then(handleResponse(res))
        .catch(handleError(res));
};

exports.updatePaste = async (req, res, next) => {
    Paste
        .findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        .then(handleResponse(res))
        .catch(handleError(res));
};

exports.deletePaste = async (req, res, next) => {
    Paste
        .findByIdAndDelete(req.params.id)
        .then(handleResponse(res))
        .catch(handleError(res));
};