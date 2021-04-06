const express = require('express')
const router = express.Router()

router.get("/", async (req, res) => {
    res.send("Hello WOrld")
});

router.post("/", async (req, res) => {
    const data = req.body

    console.log(data)

    res.json(data);
})

module.exports = router;