import { equal } from "node:assert/strict";
import { describe, it } from "node:test";
import isReplit from "../src/index";

describe("not replit", () => {
  it("should return false", () => {
    equal(isReplit(), false);
  });
});

describe("in replit", () => {
  const envVar = [
    "REPLIT",
    "REPL_OWNER",
    "REPLIT_DB_URL",
    "REPL_ID",
    "REPL_IMAGE",
    "REPL_LANGUAGE",
    "REPL_PUBKEYS",
    "REPL_SLUG",
    "PRYBAR_FILE",
  ];

  envVar.forEach((value) => {
    it(`should return true (${value})`, () => {
      process.env[value] = "1";

      equal(isReplit(), true);

      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete process.env[value];
    });
  });
  it("should return false", () => {
    equal(isReplit(), false);
  });
});
