import pool from "./database.js";

async function getPeople(req, res) {
  const [people] = await pool.query(/*SQL*/ `SELECT * FROM people`);
  res.send(people);
}

export default getPeople;
