import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.status(200).send('<h1>Server running</h1>'));

export default routes;
