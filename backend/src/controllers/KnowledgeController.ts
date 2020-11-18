import { Request, Response } from 'express';
import Knowledge from '../models/Knowledge';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

export default {
    async index(req: Request, res: Response) {
        try {
            const knowledgeRepository = getRepository(Knowledge);
            const knowledge = await knowledgeRepository.find();

            return res.status(200).json({ knowledge });
        } catch (err) {
            console.log('Error on (index) [knowledge] -> ', err);
            return res.status(500).json({ err });
        };
    },

    async show(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const knowledgeRepository = getRepository(Knowledge);

            const knowledge = await knowledgeRepository.findOne({ id: Number(id) })
                .catch(err => res.status(404).json({ message: 'Incorrect id' }));

            return res.status(200).json({ knowledge });
        } catch (err) {
            console.log('Error on (show) [knowledge] -> ', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        };
    },

    async create(req: Request, res: Response) {
        try {
            const schema = Yup.object().shape({
                type: Yup.string().required(),
                name: Yup.string().required(),
                description: Yup.string().required(),
                image_url: Yup.string().required(),
                about_link: Yup.string().required(),
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

            return res.status(201).json({ knowledge });
        } catch (err) {
            console.log('Error on (create) [knowledge] -> ', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    async update(req: Request, res: Response) {
        try {
            const knowledgeRepository = getRepository(Knowledge);

            await knowledgeRepository.update(req.params.id, req.body);
            const knowledge = await knowledgeRepository.find();

            return res.status(200).json({ knowledge });
        } catch (err) {
            console.log('Error on (update) [knowledge] -> ', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        };
    },

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const knowledgeRepository = getRepository(Knowledge);

            await knowledgeRepository.delete(id);
            const knowledge = await knowledgeRepository.find();

            return res.status(200).json({ knowledge });
        } catch (err) {
            console.log('Error on (remove) [knowledge] -> ', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        };
    },
};
