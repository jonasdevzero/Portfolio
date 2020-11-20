import { Router } from 'express';
import KnowledgeController from './controllers/KnowledgeController';
import ProjectController from './controllers/ProjectController';
import UserController from './controllers/UserController';

const routes = Router();

routes.get('/', (req, res) => res.status(200).send('<h1>Server running</h1>'));

routes.get('/knowledge', KnowledgeController.index);
routes.get('/knowledge/:id', KnowledgeController.show);
routes.post('/knowledge', UserController.auth, KnowledgeController.create, KnowledgeController.index);
routes.put('/knowledge/:id', UserController.auth, KnowledgeController.update, KnowledgeController.index);
routes.delete('/knowledge/:id', UserController.auth, KnowledgeController.delete, KnowledgeController.index);

routes.get('/project', ProjectController.index);
routes.get('/project/:id', ProjectController.show);
routes.post('/project', UserController.auth, ProjectController.create, ProjectController.index);
routes.put('/project/:id', UserController.auth, ProjectController.update, ProjectController.index);
routes.delete('/project/:id', UserController.auth, ProjectController.delete, ProjectController.index);

routes.post('/user', UserController.login)
routes.post('/user/create', UserController.create); // temporary

export default routes;
