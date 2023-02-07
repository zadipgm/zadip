import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import ContactPostApi, {
  ContactGetApi,
} from "./controllers/constactController.js";

const app = express();
app.use(bodyParser.json());

//................cors.............

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

//......................get request.................

app.get("/", ContactGetApi);

//....................post request...................

app.post("/contact", ContactPostApi);

//................port listen...............

app.listen(5000, () => {
  console.log("app listening on port 5000!");
});
