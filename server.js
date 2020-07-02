
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("APP listening on PORT " + PORT)

});
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"))
});
app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"))
});
app.get("/table", function (req, res) {
    res.sendFile(path.join(__dirname, "table.html"))
});

// app.get



const reservationInfo = [
    {
        type:"input",
        message: "First and last name",
        name: "name"
    }   
]
const waitListInfo = [
    {
        type:"input",
        message: "First and last name",
        name: "name"
    }   
]
