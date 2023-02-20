import { equal } from "node:assert/strict";
import { describe, it } from "node:test";
import isReplit from "../src/index";

describe("not replit", () => {
  it("should return false", () => {
    equal(isReplit(), false);
  });
});

describe("in replit", () => {
  const envVar = ["REPLIT", "REPL_ID"];

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
