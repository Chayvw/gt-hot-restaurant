
const express = require("express");
const path = require("path");
const app = express();
const PORT = prcess.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log("APP listening on PORT " + PORT)

});
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"))
});
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "reserve.html"))
})


// const reservationIfo = [ {
//     input: ,
//     name:
// }]

