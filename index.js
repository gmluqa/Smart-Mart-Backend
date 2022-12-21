const express = require("express")
const app = express()

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Smart Mart Express server listening at localhost:${PORT}`)
})

app.get("/hello", function (req, res) {
    res.send("hello!")
})