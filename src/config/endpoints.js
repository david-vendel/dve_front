const PRODUCTION_MODE = process.env.NODE_ENV === "production";

let SERVER = "http://localhost:8090";
if (PRODUCTION_MODE) {
  SERVER = "back";
  console.log("prod", SERVER);
} else {
  console.log("not prod", SERVER);
}

export const SERVER_URL = SERVER;
