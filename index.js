var x = require("express")();
var h = require("http").Server(x);
var i = require("socket.io")(h)
var ch = require('chalk')
var warna = require("colors")
var box = require("boxen")

x.get("/", (req,res) => {
    res.sendFile(__dirname + "/chat.html")
})

x.get("/jquery", (req,res) => {
    res.sendFile(__dirname + "/module/jquery.js")
})

x.get("/icon", (req,res) => {
    res.sendFile(__dirname + "/icon.png")
})

x.get("/bootstrap", (req,res) => {
    res.sendFile(__dirname + "/module/bootstrap.min.css")
})

i.on("connection", (socket) => {
    console.log(ch.bgGreen("[+] User Connected\n"))

    console.log(warna.rainbow("[!] Pesan Dari Server"))
    socket.on('pesan', (msg) => {
        console.log(ch.bgBlue(msg))
        i.emit('pesan', msg)
    })

    socket.on('disconnect', () => {
        console.log(ch.bgRed('[!] User Disconnected'))
    })
})


h.listen(7000, () => {
    console.log(warna.rainbow(box('Server Berjalan Pada Port 7000', {padding: 1})));
})
