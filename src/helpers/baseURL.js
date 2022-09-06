import dotenv from "dotenv/config";

function generateBaseURL() {
  const isSecure = String(process.env.VUE_APP_SECURE) === "true";
  const method = isSecure ? "https" : "http";

  let url;
  if (process.env.APP_PORT !== undefined && process.env.APP_PORT.length > 0) {
    url = `${method}://${process.env.APP_URL}:${process.env.APP_PORT}`;
  } else {
    url = `${method}://${process.env.APP_URL}`;
  }

  return url;
}

const baseURL = generateBaseURL();

export default baseURL;
