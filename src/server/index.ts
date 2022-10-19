// index.ts
import bodyParser from 'body-parser';
//noinspection ES6PreferShortImport
import {
  IPost,
  thisMonth,
  thisWeek,
  today,
} from '../dummy_data/posts';
import cors from 'cors';
import express, { Express } from 'express';

const app: Express = express();
// middleware
app.use(cors());
// interpretes data from our json request - body: {}
app.use(bodyParser.json());

const allPost: Array<IPost> = [today, thisWeek, thisMonth];

// API CALLS
app.get('/posts', (req, res): void => {
  res.json(allPost);
});

/* make sure to restart the server if you get back a 404 status code */
app.post<{}, {}, IPost>('/posts', (req, res): void => {
  const post = { ...req.body, id: (Math.random() * 10000).toFixed() };
  // adding post to the end of our allPost Array
  allPost.push(post);
  res.json(post);
});

// listening port:8000
app.listen(8000, (): void => {
  console.log('Listening at: http://localhost:8000\n');
});
