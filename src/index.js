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
import compression from "compression";
import express from "express";          // -> ES Module

import swaggerAutogen from "swagger-autogen";
import swaggerUiExpress from "swagger-ui-express";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression({
  level: 6,
  threshold: 512
}));

app.use(
  "/docs",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup({}, {
    swaggerOptions: {
      url: "/openapi.json",
    },
  })
);

app.get("/openapi.json", async (req, res, next) => {
  // #swagger.ignore = true
  const options = {
    openapi: "3.0.0",
    disableLogs: true,
    writeOutputFile: false,
  };
  const outputFile = "/dev/null"; // 파일 출력은 사용하지 않습니다.
  const routes = ["./src/index.js", "./swagger.js"];
  const doc = {
    info: {
      title: "UMC 8th",
      description: "UMC 8th Node.js 테스트 프로젝트입니다.",
    },
    host: "localhost:3000",

    components: {
        schemas: {
            err500: {
                resultType: 'error',
                error: {
                  errorCode: 'E001',
                  reason: 'Internal Server Error',
                  data: null
                },
                result: null
            }
        }
    }
  };

  const result = await swaggerAutogen(options)(outputFile, routes, doc);
  res.json(result ? result.data : null);
});

app.get('/', (req, res) => {
  const str = 'teststeststsdaragsrsaeasdgajigajwgawgonrogniwegnowegnawg';
  res.send(str.repeat(10000));
});

app.use((req, res, next)=> {
  res.success = (result) => {
    return res.json({
      resultType: "success",
      error: null,
      result: result
    })
  }

  res.error = ({
    errorCode = "unknown",
    statusCode,
    reason = null,
    data = null
  }) => {
    return res.json({
      resultType: "error",
      error: {
        errorCode, reason, data
      },
      result: null
    })
  }

  next();
});

app.post("/user/signup", handleUserSignUp);
app.post("/shop", handleNewShop);
app.post("/shop/review", handleNewReview);
app.post("/mission", handleNewMission);
app.post("/mission/accept/:id", handleAcceptMission);
app.get("/user/:id/review", handleGetUserReview);
app.get("/shop/:id/mission", handleGetMissionByShopId);
app.get("/user/:id/mission/ongoing", handleGetAcceptedUserMission);
app.patch("/user/:id/mission/:mid/complete", handleCompleteUserMission);

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  res.status(err.statusCode || 500).error({
    errorCode: err.errorCode || "unknown",
    reason: err.reason || err.message || null,
    data: err.data || null
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})