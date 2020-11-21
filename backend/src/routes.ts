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

routes.get('/projects', ProjectController.index);
routes.get('/projects/:id', ProjectController.show);
routes.post('/projects', UserController.auth, ProjectController.create, ProjectController.index);
routes.put('/projects/:id', UserController.auth, ProjectController.update, ProjectController.index);
routes.delete('/projects/:id', UserController.auth, ProjectController.delete, ProjectController.index);

routes.post('/users/login', UserController.login);
routes.post('/users/auth', UserController.auth);
routes.post('/users/create', UserController.create); // temporary

export default routes;
