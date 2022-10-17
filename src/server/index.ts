// index.ts
//noinspection ES6PreferShortImport
import { thisMonth, thisWeek, today } from '../dummy_data/posts';
import cors from 'cors';
import express, { Express } from 'express';

const app: Express = express();
// middleware
app.use(cors());

app.get('/posts', (req, res) => {
  res.json([today, thisWeek, thisMonth]);
});

// listening port:8000
app.listen(8000, () => {
  console.log('Listening at: http://localhost:8000\n');
});
