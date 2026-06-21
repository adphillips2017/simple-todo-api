import express from 'express';
import { requestLogger } from './middleware/logger';
import { errorHandler } from './middleware/errorHandler';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(requestLogger);


// Routes
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});


// Error Handling Middleware
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
