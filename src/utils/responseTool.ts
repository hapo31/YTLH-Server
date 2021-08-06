import { Response } from "express";

export function success(res: Response, data: unknown, raw?: string) {
  if (raw) {
    res.write(raw);
  } else {
    res.write(JSON.stringify(data));
  }
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
