import usersRoutes from "./api/users.routes";

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

let port: string;
let host: string;

dotenv.config();
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.static("public"));

if (process.env.NODE_ENV === "production") {
  port = "port on production";
  host = "host production";
  // Express serve static files on production environment
  app.use(express.static(path.resolve(__dirname, "src")));
} else {
  port = process.env.BACK_PORT;
  host = process.env.BACK_HOST;
  const corsOptions = {
    // Make sure origin contains the url your frontend is running on
    origin: ["http://127.0.0.1:3000", "http://localhost:3000"],
  };
  app.use(cors(corsOptions));
}

app.use("/api/users", usersRoutes);

app.listen(port, () => {
  console.log(`server running : http://${host}:${port}`);
});
