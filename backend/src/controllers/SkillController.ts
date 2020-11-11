import Skill from '../models/skill';
import { Request, Response } from 'express';

export default {
    async index(req: Request, res: Response) {
        try {
            const skills = await Skill.find();
            return res.status(200).json({ skills });
        } catch (err) {
            console.log('Error in { skill } - [index] -> ', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        };
    },

    async create(req: Request, res: Response) {
        try {
            await Skill.create(req.body)
                .catch(err => {
                    return res.json({
                        message: {
                            type: 'error',
                            description: 'Fill in the data correctly'
                        },
                    });
                });

            return res.status(200).json({
                message: {
                    type: 'success',
                    description: 'Skill created with success'
                },
            });
        } catch (err) {
            console.log('Error in { skill } - [create] -> ', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        };
    },

    async delete(req: Request, res: Response) {
        try {
            await Skill.findByIdAndDelete(req.params.id);

            return res.status(200).json({
                message: {
                    type: 'success',
                    description: 'Skill deleted with success'
                },
            });
        } catch (err) {
            console.log('Error in { skill } - [delete] -> ', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        };
    },
};
