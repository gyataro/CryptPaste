const mongoose = require("mongoose");
const configs = require("../configs");

const counterSchema = new mongoose.Schema({
    prefix: {
        type: String,
        index: true,
        default: "counter"
    },
    hi: {
        type: Number,
        default: -1
    },
    lo: {
        type: Number,
        default: configs.URL_HASH_LO
    }
})

const Counter = mongoose.model("Counter", counterSchema);
module.exports = Counter;