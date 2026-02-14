const pool = require("@/config/database");

const findAll = async (limit, offset, condition = {}) => {
  try {
    const queryStr = Object.entries(condition)
      .filter(([_, value]) => value !== undefined)
      .map(([key, value]) => {
        value = typeof value === "number" ? value : `"${value}"`;
        return `${key}=${value}`;
      })
      .join(" and ");

    const [rows] = await pool.query(
      `SELECT * FROM posts ${queryStr ? `where ${queryStr}` : ""} LIMIT ${limit} OFFSET ${offset};`,
    );
    return rows;
  } catch (error) {
    console.log(error);
  }
};
const count = async () => {
  try {
    const [rows] = await pool.query(`select count(*) as count from posts;`);
    return rows[0].count;
  } catch (error) {
    console.log(error);
  }
};
module.exports = { findAll, count };
