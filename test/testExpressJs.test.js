import request from "supertest";
import baseURL from "../src/helpers/baseURL.js";

const baseUrl = baseURL;
test("Test Express JS", async () => {
  const response = await request(baseUrl).get("/api/auth/test");
  expect(response.text).toBe("yusuf");
});
