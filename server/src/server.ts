import usersRoutes from "./api/users.routes";

import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use("/api/users", usersRoutes);

// LIST
// app.get("/api/users", (req, res) => {
// const filterBy = {
//     txt: req.query.txt,
//     minSpeed: +req.query.minSpeed,
//     pageIdx: +req.query.page || 0
// }
//   usersService.query().then((users: any) => {
//     res.send(users);
//   });
// });

app.listen(process.env.BACK_PORT, () => {
  console.log(
    `server running : http://${process.env.BACK_HOST}:${process.env.BACK_PORT}`
  );
});
