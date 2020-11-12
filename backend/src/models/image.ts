import mongoose from '../database/db';
import { Document } from 'mongoose';

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

interface IImage extends Document {
    url: string;
    project: mongoose.Schema.Types.ObjectId;
};

export default mongoose.model<IImage>('image', ImageSchema);
