import { Response } from "express";

export function success(res: Response, data: unknown) {
  res.write(JSON.stringify(data));
  res.end();
}
export function error(res: Response, reason: string, statusCode = 400) {
  res.write(
    JSON.stringify({
      status: "error",
      reason,
    })
  );
  res.statusCode = statusCode;
  res.end();
}
