import mongoose from '../database/db';
import { Document } from 'mongoose';

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

interface ITechnology extends Document {
    name: string;
    project: mongoose.Schema.Types.ObjectId;
};

export default mongoose.model<ITechnology>('technology', Technology);
