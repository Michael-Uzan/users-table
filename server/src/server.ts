import usersRoutes from "./api/users.routes";

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

let port: string;

dotenv.config();
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.static("public"));

if (process.env.NODE_ENV === "production") {
  port = process.env.PRODUCTION_PORT;
  // Express serve static files on production environment
  app.use(express.static(path.resolve(__dirname, "public")));
} else {
  port = process.env.BACK_PORT;
  const corsOptions = {
    // Make sure origin contains the url your frontend is running on
    origin: ["http://127.0.0.1:3000", "http://localhost:3000"],
  };
  app.use(cors(corsOptions));
}

app.use("/api/users", usersRoutes);

app.listen(port, () => {
  console.log(`server running : http://${process.env.BACK_HOST}:${port}`);
});
