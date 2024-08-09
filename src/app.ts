import express from 'express';
import chatRoute from './routes/chat.route';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(chatRoute);

export default app;