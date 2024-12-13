import express, { Express, Request, Response } from 'express';
import { CorsOptions } from 'cors';
import { projectRouter } from './routes/project';
import { categoryRouter } from './routes/category';

const allowedOrigins: string[] =  ['http://localhost:5173'];

const corsOrigin: CorsOptions = {
    origin: allowedOrigins,
};

const app: Express = express();
const port: number = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('<h1>Project Manager</h1>');
});

app.use('/project', projectRouter);

app.use('/category', categoryRouter);

app.listen(port, () => {
    console.log(`Project Manager is listening on http://localhost:${port}`)
});
