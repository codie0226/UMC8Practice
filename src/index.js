import cors from "cors";
import { 
  handleUserSignUp,
  handleGetUserReview,
  handleGetAcceptedUserMission,
  handleCompleteUserMission
} from "./controllers/user.controller.js";
import { 
  handleNewShop,
  handleNewReview,
  handleGetMissionByShopId
} from "./controllers/shop.controller.js";
import {
  handleNewMission,
  handleAcceptMission
} from "./controllers/mission.controller.js";

import dotenv from "dotenv";
import express from "express";          // -> ES Module

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.post("/user/signup", handleUserSignUp);
app.post("/shop", handleNewShop);
app.post("/shop/review", handleNewReview);
app.post("/mission", handleNewMission);
app.post("/mission/accept/:id", handleAcceptMission);
app.get("/user/:id/review", handleGetUserReview);
app.get("/shop/:id/mission", handleGetMissionByShopId);
app.get("/user/:id/mission/ongoing", handleGetAcceptedUserMission);
app.patch("/user/:id/mission/:mid/complete", handleCompleteUserMission);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})