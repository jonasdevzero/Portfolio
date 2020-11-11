import mongoose from '../database/db';

const Technology = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'project',
        required: true,
    },
});

export default mongoose.model('technology', Technology);
