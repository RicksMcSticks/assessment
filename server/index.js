const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, addFortune, deleteFortune} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.post(`/api/`, addFortune)
app.delete(`/dinos/:id`, deleteFortune)

app.listen(4000, () => console.log("Server running on 4000"));
