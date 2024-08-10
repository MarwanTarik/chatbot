import express from 'express';
import chatRoute from './routes/chat.route.js';
import analysisRoute from './routes/analyze.route.js';
import recognitionRoute from './routes/recognition.route.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(cors({
  origin:  '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
}));

app.use(chatRoute);
app.use(analysisRoute);
app.use(recognitionRoute);

export default app;