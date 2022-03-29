const express = require("express");
const cors = require("cors");
const pasteRouter = require("../routes/pasteRouter");

const app = express();

// app is behind front-facing proxy (nginx)
app.enable("trust proxy");

// app has CORS enabled
app.use(cors({ exposedHeaders: 'Location' }));

// recognise incoming request object as JSON
app.use(express.json());

// set all endpoints
app.use("/api/paste", pasteRouter);

// set 404 not found handler
app.use((req, res, next) => {
    res.status(404);
    res.json({
        status: "fail",
        message: "Request not found."
    });
});

module.exports = app;