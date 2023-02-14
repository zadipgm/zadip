import db from "./db/Database";

export default async function HeadGetApi(req, res) {
  db.query(
    `SELECT * FROM head WHERE Page_Name = '${req.query.page}'`,
    (err, result, fields) => {
      if (result?.length === 0) {
        res.status(500).send({ message: "No data found for this page" });
      } else {
        return res.json(result);
      }
    }
  );
}
