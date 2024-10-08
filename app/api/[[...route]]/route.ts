import { zValidator } from "@hono/zod-validator";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { z } from "zod";
import authors from "./authors";
import books from "./books";
import accounts from "./accounts";
import { HTTPException } from "hono/http-exception";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.onError((err, c) => {
  if (err instanceof HTTPException) {
    return err.getResponse();
  }
  return c.json({ error: "Internal Errors" }, 500);
});

const schema = z.object({ test: z.string() });

app.route("/authors", authors);
app.route("/books", books);

app
  .get("/hello", clerkMiddleware(), (c) => {
    const auth = getAuth(c);
    if (!auth?.userId) {
      return c.json({ error: "UnAuthorized" });
    }
    return c.json({
      message: "Hello Next.js!",
      userId: auth && auth?.userId + auth?.sessionId,
    });
  })
  .get("/hello/:test", zValidator("param", schema), (c) => {
    const testv1 = c.req.param("test");
    const { test } = c.req.valid("param");
    return c.json({
      message: "Hello Next.js!",
      test,
    });
  });

const routes = app.route("/accounts", accounts);

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
