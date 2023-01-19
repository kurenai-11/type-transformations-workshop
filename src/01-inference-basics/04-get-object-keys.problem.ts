import { Keys } from "ts-toolbelt/out/Any/Keys";
import { Equal, Expect } from "../helpers/type-utils";

const testingFrameworks = {
  vitest: {
    label: "Vitest",
  },
  jest: {
    label: "Jest",
  },
  mocha: {
    label: "Mocha",
  },
};

type TestingFramework = Keys<typeof testingFrameworks>;

type tests = [Expect<Equal<TestingFramework, "vitest" | "jest" | "mocha">>];
