import db from "./db/Database";

export default async function ContactPostApi(req, res) {
  let data = req.body;
  console.log("here is body", data);
  res.send("Data Received: " + JSON.stringify(data));
  const { Name, Email, MobileNumber, ServiceName, Page } = req.body;
  const user = { Name, Email, MobileNumber, ServiceName, Page };
  db.query("INSERT INTO contact SET ?", user, (err, output) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    } else {
      res.status({ msg: "User saved successfully!" });
    }
  });
}
