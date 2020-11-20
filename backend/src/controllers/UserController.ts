import { Request, Response, NextFunction } from 'express';
import User from '../models/User';
import UserView from '../views/users_view';
import { getRepository } from 'typeorm';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import * as Yup from 'yup';

const tokenSecret = process.env.USER_TOKEN_SECRET || 'undefined';

function encryptPassword(password: string) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
};

function generateToken(params: object) {
    return jwt.sign(params, tokenSecret, {
        expiresIn: 86400
    });
};

export default {
    async login(req: Request, res: Response) {
        if (!req.body.email || !req.body.password) 
            return res.status(400).json({ error: 'e-mail or password missing' });

        try {
            const { email, password } = req.body;

            const userRepository = getRepository(User);
            const user = await userRepository.findOne({ email });

            if (!user) return res.status(400).json({ error: 'User not found' });
   
            if (!bcrypt.compareSync(password, user.password)) 
                return res.status(400).json({ error: 'Invalid Password' });

            return res.status(200).json({ token: generateToken({ id: user.id }) });
        } catch (err) {
            console.log('Error on (show) [user] -> ', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    async auth(req: Request, res: Response, next: NextFunction) {
        if (!req.headers.access_token) return res.status(401).json({ error: 'Access Denied' });
        
        try {
            const { access_token } = req.headers;

            const userVerified = jwt.verify(String(access_token), tokenSecret);

            if (req.query.u === 'true') {
                req.body.user = userVerified;
                const { id } = req.body.user;

                const userRepository = getRepository(User);
                const user = await userRepository.findOne(id);

                if (!user) return res.status(404).json({ error: 'User not found' });

                return res.status(200).json({ user: UserView.render(user) });
            };

            next();
        } catch (err) {
            return res.status(400).json({ error: 'Invalid Token' });
        };
    },

    async create(req: Request, res: Response) { // temporary
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required(),
                email: Yup.string().required(),
                password: Yup.string().required(),
            });
            await schema.validate(req.body);

            const userRepository = getRepository(User);
            
            req.body.password = encryptPassword(req.body.password);
            const user = userRepository.create(req.body);
            await userRepository.save(user);

            return res.status(201).json({ user });
        } catch (err) {
            console.log('Error on (create) [user] -> ', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        };
    },
};
