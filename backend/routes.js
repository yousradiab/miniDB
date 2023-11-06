import express from "express";
import cors from "cors";
import getPeople from "./controllers.js";

const app = express();
const port = 5002;

app.use(cors());
app.use(express.json());

app.get("/people", getPeople);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
