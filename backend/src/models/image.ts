import mongoose from '../database/db';

const ImageSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'project',
        required: true,
    },
});


export default mongoose.model('image', ImageSchema)