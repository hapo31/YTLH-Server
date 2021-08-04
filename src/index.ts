import express from "express";
import fetch from "node-fetch";
import env from "./config/env";
import { error, success } from "./utils/responseTool";
import * as date from "date-fns";

const scope = encodeURIComponent(
  ["https://www.googleapis.com/auth/youtube"].join(" ")
);

const app = express();

const redirectUri = encodeURIComponent(`${env.redirectUriBase}:${env.port}/redirect`);
const clientId = env.clientId;
const secret = env.clientSecret;

app.post("/authorize", (req, res) => {
  const oauth2Url =
    `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`;
  
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

  const oauthInfo = await response.json();
  
  const expiresDate = date.addSeconds(new Date(), oauthInfo["expires_in"]);

  const dateStr = date.format(expiresDate, "yyyy-MM-dd HH:mm:ssXXX");

  success(res, {
    access_token: oauthInfo["access_token"],
    expires_date: dateStr,
    refresh_token: oauthInfo["refresh_token"]
  });
  
});


app.listen(env.port);

console.log("server listening.");
console.log("info", env);
