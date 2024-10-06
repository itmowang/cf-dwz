import { Hono } from "hono";
import user from "./src/user";
import link from "./src/link";
import { jwt } from "hono/jwt";
import { cors } from 'hono/cors' 

const app = new Hono().basePath("/api");

app.use('*', cors())

app.use(
  "/link/*",jwt({ secret: "mowang",})
);

app.get("/", (c) => c.text("GET /"));
app.post("/", (c) => c.text("POST /"));
app.put("/", (c) => c.text("PUT /"));
app.delete("/", (c) => c.text("DELETE /"));

//  routes
user(app, "/user");
link(app, "/link");

app.notFound((c) => {
  return c.text("Custom 404 Message", 404);
});

app.onError((err, c) => {
  console.error(`${err}`);
  return c.text("Custom Error Message", 500);
});

export default app;
