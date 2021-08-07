import dotenv from "dotenv";

if (!("prod" in process.env)) {
  dotenv.config({ path: ".env" });
}

const env = {
  port: process.env["PORT"],
  clientId: process.env["GOOGLE_CLIENT_ID"],
  clientSecret: process.env["GOOGLE_CLIENT_SECRET"],
  redirectUriBase: process.env["REDIRECT_URI_BASE"],
  redirectUri: process.env["REDIRECT_URI"]
};

export default env;
