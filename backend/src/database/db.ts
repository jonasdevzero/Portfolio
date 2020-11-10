import mongoose from 'mongoose';

const DB_CONNECT = process.env.DB_CONNECT || 'undefined';

mongoose.connect(DB_CONNECT, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

export default mongoose;
