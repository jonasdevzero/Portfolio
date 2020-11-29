import { Request, Response, NextFunction } from 'express';
import Knowledge from '../models/Knowledge';
import KnowledgeView from '../views/knowledge_view';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

export default {
    async index(req: Request, res: Response) {
        try {
            const { language } = req.query;
            
            const knowledgeRepository = getRepository(Knowledge);

            let knowledge;
            switch(language) {
                case undefined:
                    knowledge = await knowledgeRepository.find();
                    break;
                default:
                    knowledge = await knowledgeRepository.find({ where: { language }, order: { id: 'ASC' } });
            };

            return res.status(200).json({ knowledge: KnowledgeView.renderMany(knowledge) });
        } catch (err) {
            console.log('Error on (index) [knowledge] -> ', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        };
    },

    async show(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const knowledgeRepository = getRepository(Knowledge);
            const knowledge = await knowledgeRepository.findOne({ id: Number(id) });

            if (!knowledge) return res.status(404).json({ message: 'Incorrect id' });

            return res.status(200).json({ knowledge: KnowledgeView.render(knowledge) });
        } catch (err) {
            console.log('Error on (show) [knowledge] -> ', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        };
    },

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const schema = Yup.object().shape({
                type: Yup.string().required(),
                name: Yup.string().required(),
                description: Yup.string().required(),
                image_url: Yup.string().required(),
                about_link: Yup.string().required(),
                language: Yup.string().required(),
            });
            await schema.validate(req.body, { abortEarly: false })
                .catch(err => res.status(400).json({
                    error: {
                        message: `field(s) empty`,
                        fields: err.inner.map((field: any) => field.path),      
                    },
                }));

            const knowledgeRepository = getRepository(Knowledge);

            const knowledge = knowledgeRepository.create(req.body);
            await knowledgeRepository.save(knowledge);

            res.status(201);
            next();
        } catch (err) {
            console.log('Error on (create) [knowledge] -> ', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        };
    },

    async update(req: Request, res: Response, next: NextFunction) {
        if (!req.params.id) return res.status(400).json({ error: 'id missing' });

        try {
            const knowledgeRepository = getRepository(Knowledge);
            await knowledgeRepository.update(req.params.id, req.body);
            
            next();
        } catch (err) {
            console.log('Error on (update) [knowledge] -> ', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        };
    },

    async delete(req: Request, res: Response, next: NextFunction) {
        if (!req.params.id) return res.status(400).json({ error: 'id missing' });
        
        try {
            const { id } = req.params;

            const knowledgeRepository = getRepository(Knowledge);
            await knowledgeRepository.delete(id);
            
            next();
        } catch (err) {
            console.log('Error on (remove) [knowledge] -> ', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        };
    },
};
