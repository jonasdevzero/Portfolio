import { Router } from 'express';
import KnowledgeController from './controllers/KnowledgeController';

const routes = Router();

routes.get('/', (req, res) => res.status(200).send('<h1>Server running</h1>'));

routes.get('/knowledge', KnowledgeController.index);
routes.get('/knowledge/:id', KnowledgeController.show);
routes.post('/knowledge', KnowledgeController.create);
routes.put('/knowledge/:id', KnowledgeController.update);
routes.delete('/knowledge/:id', KnowledgeController.delete);

export default routes;
