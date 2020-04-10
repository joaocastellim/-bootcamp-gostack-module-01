import express, { Request, Response, Express} from 'express';
import { helloWorld } from './routes';

const app: Express = express();

app.get('/', helloWorld);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});