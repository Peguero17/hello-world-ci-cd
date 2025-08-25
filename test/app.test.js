import test from "node:test";
import assert from "node:assert/strict";
import request from "supertest";
import app from "../src/app.js";

test("GET / responde 'Hola Mundo'", async () => {
  const res = await request(app).get("/");
  assert.equal(res.status, 200);
  assert.equal(res.text, "Hola Mundo");
});
