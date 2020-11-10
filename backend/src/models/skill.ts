import mongoose from '../database/db';

const SkillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image_url: {
        type: String,
        required: true,
    },
    about_link: {
        type: String,
        required: true,
    },
});


export default mongoose.model('skill', SkillSchema)