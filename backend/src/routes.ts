import { Router } from 'express';
import SkillController from './controllers/SkillController';

const routes = Router();

routes.get('/', (req, res) => res.send('<h1>Server running</h1>'))

routes.get('/skill', SkillController.index);
routes.post('/skill', SkillController.create);
routes.delete('/skill', SkillController.delete);

export default routes;
