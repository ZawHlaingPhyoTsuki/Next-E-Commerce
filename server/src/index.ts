import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import helmet from "helmet";
// import morgan from "morgan";
import routes from "./routes"; // Ensure this import is correct

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middlewares
app.use(cors());
// app.use(helmet());
// app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api", routes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
