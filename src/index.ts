import express from "express";
import fetch from "node-fetch";
import env from "./config/env";
import cors from "cors";

import { error, success } from "./utils/responseTool";

const isDev = process.env.NODE_ENV === "development";

const serveStaticPath = "public";

const scope = encodeURIComponent(
  ["https://www.googleapis.com/auth/youtube"].join(" ")
);

const app = express();

const redirectUri = encodeURIComponent(
  env.redirectUri ?? `${env.redirectUriBase}:${env.port}/redirect`
);
const clientId = env.clientId;
const secret = env.clientSecret;

app.use(express.static(serveStaticPath));

app.use("/privacy_policy", express.static(serveStaticPath));

app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

app.post("/authorize", (req, res) => {
  const oauth2Url = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code&access_type=offline&approval_prompt=force`;

  success(res, { oauth2Url });
});

app.get("/redirect", async (req, res) => {
  const code = req.query["code"];
  if (!code) {
    error(res, "'code' is not exist in query.", 401);
    return;
  }

  const getAccessTokenUrl = `https://oauth2.googleapis.com/token`;
  const response = await fetch(getAccessTokenUrl, {
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `code=${code}&client_id=${clientId}&client_secret=${secret}&redirect_uri=${redirectUri}&grant_type=authorization_code`,
  });

  const oauthInfoObj = await response.json();

  success(
    res,
    null,
    `<html>
    <body>
      OK
      <div id="credentials" style="display:none;">${JSON.stringify(
        oauthInfoObj
      )}</div>
    </body>
  </html>`
  );
});

app.post("/token", async (req, res) => {
  const refreshToken = req.body["refresh_token"];
  if (!refreshToken) {
    error(res, "refresh_token is required.", 400);
    return;
  }
  const response = await fetch("https://www.googleapis.com/oauth2/v4/token", {
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `client_id=${clientId}&client_secret=${secret}&refresh_token=${refreshToken}&grant_type=refresh_token`,
  });

  const data = await response.json();
  success(res, data);
});

app.listen(env.port);

console.info("server listening.");
