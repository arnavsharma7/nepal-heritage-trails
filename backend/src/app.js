import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import userRouter from "./routes/UserRouter.js"
import trailRouter from "./routes/TrialsRouter.js"
import authRouter from "./routes/AuthRouter.js"
import experienceRouter from "./routes/ExperincesRouter.js"
import bookingRouter from "./routes/BookingRouter.js"
import impactRouter from "./routes/ImpactRouter.js"

const app = express();

app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/health', (_req, res) => {
  res.json({
    status: 'healthy',
    service: 'Nepal Heritage Trails API',
    timestamp: new Date().toISOString()
  });
});

// Keep non-/api routes during the transition from the old structure.
app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/trails", trailRouter);
app.use("/experiences", experienceRouter);
app.use("/bookings", bookingRouter);
app.use("/impact", impactRouter);

app.use((err, _req, res, _next) => {
  const statusCode = err.statusCode || 500;

  if (statusCode >= 500) {
    console.error(err);
  }

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    errors: err.errors || [],
  });
});

export default app;
