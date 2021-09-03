const express = require("express")
const fs = require("fs")
const path = require("path")
const app = express(); 
const port = 5500;

app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'tags.html'));
})

// app.get('/', (req, res) => {
//     res.status(200).sendFile(path.join(__dirname, 'tags.html'));
// })
// app.get('/', (req, res) => {
//     res.status(200).sendFile(path.join(__dirname, 'tags.html'));
// })
// app.get('/', (req, res) => {
//     res.status(200).sendFile(path.join(__dirname, 'tags.html'));
// })

app.listen(port, () => {  // !port listening
    console.log(`this is thunderbolt's mega port http://localhost:${port}`)
})     
    
