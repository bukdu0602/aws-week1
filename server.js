const express = require("express");
const app = express();

app.use(express.json())
app.use(express.static("build"))


const pokemons = ["pikachu", "eevee"]

app.get("/api/pokemons", (req, res) => {
  res.send(pokemons)
});

app.post("/api/pokemons", (req, res) => {
  const data = req.body.name
  pokemons.push(data)
  res.send(data)
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`listening on port ${port}`))
