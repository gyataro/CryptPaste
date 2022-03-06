const mongoose = require("mongoose");
const hashids = require("hashids");
const bcrypt = require("bcrypt");
const constants = require("../loaders/constants");
const configs = require("../configs");
const Counter = require("../models/counterModel");

let hasher = new hashids(configs.PASTE_URL_HASH_SALT, configs.PASTE_URL_HASH_LENGTH);
let currentHi = -1;
let currentLo = -1;
let maxLo = -1;

const pasteSchema = new mongoose.Schema({
    urlId: {
        type: String,
        index: true,
        unique: true
    },
    title: {
        type: String,
        required: [true, "Post must have title."]
    },
    format: {
        type: String,
        lowercase: true,
        enum: { 
            values: constants.paste.PASTE_FORMATS, 
            message: "Post must have valid format."
        },
        required: [true, "Post must have a format."]
    },
    views: {
        type: Number,
        default: 0
    },
    secret: {
        type: String,
        default: null
    },
    content: {
        type: String,
        required: [true, "Paste must have content."]
    },
    visibility: {
        type: String,
        lowercase: true,
        enum: { 
            values: constants.paste.PASTE_VISIBILITY, 
            message: "Post must have a valid visibility setting."
        },
        default: constants.paste.PASTE_VISIBILITY[0]
    },
    isBurned: {
        type: Boolean,
        default: false
    },
    expiresAt: {
        type: Date,
        expires: 0
    }
}, { timestamps: true });

// Check if there are available id numbers. If not, request a new batch.
pasteSchema.pre('save', function(next) {
    if (currentLo >= maxLo) {
        var filter  = { prefix: "counter" };
        var update  = { $inc: { hi: 1 } };
        var options = { upsert: true, new: true };

        Counter
            .findOneAndUpdate(filter, update, options)
            .then((counter) => {
                currentHi = counter.hi;
                currentLo = 0;
                maxLo = counter.lo;
                next();
            })
            .catch((err) => {
                throw new Error(`Cannot reserve ids from counter: ${err}`);
            })
    } else {
        next();
    }
});

// Hash integer id number into base64 characters and set as paste URL id.
pasteSchema.pre('save', function(next) {
    if (currentHi == -1 || currentLo == -1 || maxLo == -1 || currentLo >= maxLo)
        throw new Error(`Counter not properly initialized: currentHi: ${currentHi}, currentLo: ${currentLo}, maxLo: ${maxLo}`);

    this.urlId = hasher.encode(BigInt(`${currentHi}${currentLo}`));
    currentLo += 1;

    next();
});

// Encode secret, if present.
pasteSchema.pre('save', function(next) {
    if (this.secret)
        this.secret = bcrypt.hashSync(this.secret, configs.PASTE_SECRET_COST_FACTOR);

    next();
})

const Paste = mongoose.model("Paste", pasteSchema);
module.exports = Paste;