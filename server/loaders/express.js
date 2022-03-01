const express = require("express");
//const routes = require("./routes")

const app = express();

// app is behind front-facing proxy (nginx)
app.enable("trust proxy");

// recognise incoming request object as JSON
app.use(express.json());

// set all endpoints
// app.use(routes);

// set 404 not found handler
app.use((req, res, next) => {
    res.status(404);
    res.json({
        status: "fail",
        data: { "message": "Request not found." }
    });
});

module.exports = app;