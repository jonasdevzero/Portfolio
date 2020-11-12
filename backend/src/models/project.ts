import mongoose from '../database/db';
import { Document } from 'mongoose';

const Project = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    source_link: { // github
        type: String,
        required: true,
    },
    project_link: { // deploy
        type: String,
        required: false,
    },
    objective: {
        type: String,
        required: true,
    },
    difficulties: {
        type: String,
        required: true,
    },
    knowledge: {
        type: String,
        required: true,
    },
    images: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'image',
        required: true,
    }],
    technologies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'technology',
        required: true,
    }],
});

interface IProject extends Document {
    name: string
    description: string
    source_link: string
    project_link: string
    objective: string
    difficulties: string
    knowledge: string
    images: Array<{
        url: string
        project: mongoose.Schema.Types.ObjectId;
    }>,
    technologies: Array<{
        name: string
        project: mongoose.Schema.Types.ObjectId;
    }>,
};

export default mongoose.model<IProject>('project', Project);
