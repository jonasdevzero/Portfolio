import mongoose from '../database/db';

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
    }],
    technologies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'technology',
        required: true,
    }],
});

export default mongoose.model('project', Project);
