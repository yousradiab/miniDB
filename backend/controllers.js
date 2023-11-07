import pool from "./database.js";

async function getPeople(req, res) {
  const pageNum = Number(req.query.page);
  const limit = Number(req.query.limit);

  let people;
  if (isNaN(pageNum) || isNaN(limit)) {
    [people] = await pool.query(/*SQL*/ `SELECT * FROM people ORDER BY name`);
    res.send(people);
  } else {
    const offset = (pageNum - 1) * limit;
    [people] = await pool.query(/*SQL*/ `SELECT * FROM people ORDER BY name LIMIT ? OFFSET ?`, [limit, offset]);
    res.send(people);
  }
}

export default getPeople;
