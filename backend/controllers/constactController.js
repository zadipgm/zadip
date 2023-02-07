import database from "../config/Database.js";

export const ContactPostApi = (req, res) => {
  let data = req.body;
  res.send("Data Received: " + JSON.stringify(data));
  const { Name, Email, MobileNumber, ServiceName } = req.body;
  const user = { Name, Email, MobileNumber, ServiceName };
  database.query("INSERT INTO contact SET ?", user, (err, output) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    } else {
      res.status({ msg: "User saved successfully!" });
    }
  });
};

export const ContactGetApi = (req, res) => {
  database.query("SELECT * FROM contact", function (err, result, fields) {
    return res.json(result);
  });
};

export default ContactGetApi;
