import express, { Application } from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/", (_req, res) => {
  res.send("Server is running....");
});

export default app;
