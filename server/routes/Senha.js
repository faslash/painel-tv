const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const dotenv = require('dotenv')

dotenv.config({ path: "./.env" });

const db = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});


router.get("/", async (req, res) => {
  
  db.query("SELECT * FROM senha ORDER BY cod_senha DESC LIMIT 5", (err, result) => {
    if(err){
      res.send({err: err});
    } else {
      res.send(result);
    }
      
  })
});

router.post("/", async (req, res) => {
    const data = req.body

    console.log(data)

    res.json(data);
})

module.exports = router;