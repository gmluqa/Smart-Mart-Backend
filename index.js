const express = require("express")
const app = express()

const PORT = 3000

app.listen(process.env.PORT || PORT, () => {
    console.log(`Smart Mart Express server listening at localhost:${PORT}`)
})

app.get("/", function (req, res) {
    res.send("hello world!")
})