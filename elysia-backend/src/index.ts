import { Elysia } from "elysia";
import { jwt } from "@elysiajs/jwt";
import { cookie } from "@elysiajs/cookie";
import { loginController, logoutController, registerController, resetPasswordController } from "./controller/auth";

const app = new Elysia();

app.get("/", () => "Hello, Elysia!");

// Set up JWT and cookie plugins at the app level
app.use(jwt({
  name: "jwt",
  secret: process.env.JWT_SECRET || "your-secret-key",
}))
.use(cookie());

app.group("/api/auth", (app) => 
  app
    .post("/sign-in", loginController)
    .post("/sign-up", registerController)
    .post("/reset-password", resetPasswordController)
    .post("/logout", logoutController)
)

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);