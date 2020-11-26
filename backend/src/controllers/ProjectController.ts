import { Request, Response, NextFunction } from 'express';
import Project from '../models/Project';
import Image from '../models/Image';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import ProjectView from '../views/projects_view';

function pagination(data: Array<any>, limit: number, page: number) {
    let pagesArray: Array<any[]> = []
    let pageArray: any[] = []

    data.forEach((d, i) => {
        if (pageArray.length === Number(limit)) {
            pagesArray.push(pageArray)
            pageArray = []
        }
        if (i === data.length - 1 && pageArray.length < limit) {
            pagesArray.push(pageArray)
        }

        pageArray.push(d)
    })

    return pagesArray[page - 1]
}

export default {
    async index(req: Request, res: Response) {
        try {
            const { language, limit, page } = req.query;

            const projectRepository = getRepository(Project);

            let project;
            switch (language) {
                case undefined:
                    project = await projectRepository.find({ relations: ['images'] });
                    break;
                default:
                    project = await projectRepository.find({ relations: ['images'], where: { language }, order: { id: 'DESC' } })
            };

            if (limit && page) {
                const info = {
                    count: project.length,
                    pages: Math.ceil(project.length / Number(limit)),
                    limit,
                    pageSelected: page
                }  
                project = pagination(project, Number(limit), Number(page))

                if (!project) return res.status(400).json({ error: 'This page not exists' })

                return res.status(200).json({ project: ProjectView.renderMany(project), info });
            }


            return res.status(200).json({ project: ProjectView.renderMany(project) });
        } catch (err) {
            console.log('Error on (index) [project] -> ', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        };
    },

    async show(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const projectRepository = getRepository(Project);
            const project = await projectRepository.findOneOrFail(id, { relations: ['images'] });

            if (!project) return res.status(404).json({ error: 'Incorrect id' });

            return res.status(200).json({ project: ProjectView.render(project) });
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
                objective: Yup.string().required(),
                difficulties: Yup.string().required(),
                acquirements: Yup.string().required(),
                code_link: Yup.string().required(),
                website_link: Yup.string(),
                banner_image: Yup.string().required(),
                banner_gif: Yup.string().required(),
                language: Yup.string().required(),
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
                const images = req.body.images;
                const imageRepository = getRepository(Image);

                await imageRepository.delete({ project: { id: Number(id) } });

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
        if (!req.params.id) return res.status(400).json({ error: 'id missing' });

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