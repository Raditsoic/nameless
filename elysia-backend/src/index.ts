import { Elysia } from "elysia";

import { loginController, logoutController, registerController, resetPasswordController } from "./controller/auth";

const app = new Elysia();

app.group("/api/auth", (app) => {
  app.post("/sign-in", loginController);
  app.post("/sign-up", registerController);
  app.post("/reset-password", resetPasswordController);
  app.post("/logout", logoutController);
  return app
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);