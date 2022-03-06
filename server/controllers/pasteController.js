const Paste = require("../models/pasteModel");

const { 
    handleResponse, 
    handleCreated, 
    handleLockedPaste,
    handleError
} = require("./utils/pasteUtil");

exports.getAllPastes = async (req, res, next) => {
    Paste
        .find()
        .then(handleResponse(res))
        .catch(handleError(res));
};

exports.getOnePaste = async (req, res, next) => {
    Paste
        .findOneAndUpdate({ urlId: req.params.id }, {$inc: {views: 1}})
        .then(handleLockedPaste(req))
        .then(handleResponse(res))
        .catch(handleError(res));
};

exports.createPaste = async (req, res, next) => {
    Paste
        .create(req.body)
        .then(handleCreated(res))
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