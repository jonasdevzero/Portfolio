import { Request, Response, NextFunction } from 'express';
import Project from '../models/Project';
import Image from '../models/Image';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

export default {
    async index(req: Request, res: Response) {
        if (!req.params.lg) return res.status(400).json({ error: 'Language missing' });

        try {
            const { lg } = req.query;
            const language = String(lg) || 'eua';

            const projectRepository = getRepository(Project);
            const project = await projectRepository.find({ relations: ['images'], where: { language } });

            return res.status(200).json({ project });
        } catch (err) {
            console.log('Error on (index) [project] -> ', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        };
    },

    async show(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const projectRepository = getRepository(Project);
            const project = await projectRepository.findOneOrFail(id, { relations: ['images'] })
                .catch(err => res.status(404).json({ error: 'Incorrect id' }));

            return res.status(200).json({ project });
        } catch (err) {
            console.log('Error on (show) [project] -> ', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required(),
                description: Yup.string().required(),
                source_link: Yup.string().required(),
                about_link: Yup.string().required(),
                banner_image: Yup.string().required(),
                images: Yup.array(Yup.object().shape({
                    path: Yup.string().required(),
                })),
            });
            await schema.validate(req.body, { abortEarly: false })
                .catch(err => res.status(400).json({
                    error: {
                        message: `field(s) empty`,
                        fields: err.inner.map((field: any) => field.path),
                    },
                }));

            const projectRepository = getRepository(Project);

            const project = projectRepository.create(req.body);
            await projectRepository.save(project);

            next();
        } catch (err) {
            console.log('Error on (create) [project] -> ', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        };
    },

    async update(req: Request, res: Response, next: NextFunction) {
        if (!req.params.id) return res.status(400).json({ error: 'id missing' });

        try {
            const { id } = req.params;

            if (req.body.images) {
                const images =  req.body.images;
                const imageRepository = getRepository(Image);

                await imageRepository.delete({ project: {  id: Number(id) } });

                images.map(async (image: { path: string }) => {
                    const newImage = imageRepository.create({ project: { id: Number(id) }, path: image.path });
                    await imageRepository.save(newImage);
                });                

                delete req.body.images;
            };

            const projectRepository = getRepository(Project);
            await projectRepository.update(id, req.body);

            next();
        } catch (err) {
            console.log('Error on (update) [project] -> ', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    async delete(req: Request, res: Response, next: NextFunction) {
        if(!req.params.id) return res.status(400).json({ error: 'id missing' });

        try {
            const { id } = req.params;

            const projectRepository = getRepository(Project);

            await projectRepository.delete({ id: Number(id) });
            
            next();
        } catch (err) {
            console.log('Error on (delete) [project] -> ', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};