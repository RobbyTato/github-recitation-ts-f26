// Endpoint for querying the fibonacci numbers

import { Request, Response } from "express";

// fib.ts still uses `module.exports`, so it is not an ES module and has to be
// required. The cast gives the otherwise untyped export a checked signature.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fibonacci = require("./fib") as (n: number) => number;

export default (req: Request, res: Response): void => {
  const { num } = req.params;

  const fibN = fibonacci(parseInt(num, 10));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
