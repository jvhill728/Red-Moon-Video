import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Garcon! More Moet!');
});

app.listen(4000, () => console.log('Server is up'));