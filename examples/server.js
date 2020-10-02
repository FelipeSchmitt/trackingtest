const express = require('express');
const app = express();
const path = require('path')

//Template Engine

app.use(express.static(path.join(__dirname)))


app.get("/", function (req, res){
    res.sendFile(__dirname + "/face_camera.html");
});

app.listen(8081, '192.168.0.27');

