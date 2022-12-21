const express = require("express")
const app = express()

const PORT = 3000

app.listen(process.env.PORT || PORT, () => {
    console.log(`Example app listening at localhost:${PORT}`)
})

app.get("/", function (req, res) {
    res.send("hello world!")
})