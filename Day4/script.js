// const http = require("http");
// const server = http.createServer();
// const PORT = 8080;
// server.listen(PORT, () => {
//     console.log("server is running on PORT:", PORT);
// });

// https://unsplash.com/photos/a-man-holding-a-camera-in-his-hands-_zpj6jT5s5A

// https -> protocal
// unsplash -> website name
// com -> domain name
// /photos/a-man-holding-a-camera-in-his-hands-_zpj6jT5s5A -> routes

// http://localhost:5500/
// http -> protocal
// localhost -> host
// port -> unique/domain


const express = require("express");
const app = express();
const PORT = 8080;

// app.get("route", callback);
// routes/controllers
// app.get("/", (req, res) => {
//     res.send("This is the homepage of the website");
// });

// app.get("/about", (req, res) => {
//     res.send("This is the about of the website");
// });

// app.listen(PORT, () => {
//     console.log(Server running on port ${PORT});
// });

// http://localhost:8080/
// req -> frontend to backend(data transfer)
// res -> backend to frontend(data transfer)